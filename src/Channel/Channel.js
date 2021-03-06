const tokenGen=require("../agora/AgoraCustom");
const query=require("../db/db-connection");
//TODO:
// const channelNameLength= process.env.CHANNEL_NAME_LENGTH;
const channelNameLength=6;
class channelName{
    #createChannelName=async (length) =>{
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }

    #randomTopic=async (lowerLimit,upperLimit,id)=>{
      let topic={},fetched; 
      if(id==0){
        id=Math.random(),topic;
        id*=(upperLimit-lowerLimit)+lowerLimit;
        id=Math.ceil(id); 
      }
        topic.id=id;
        fetched= await query("select topic from topics where topic_id="+id);
        
        topic.name=fetched[0].topic;
        return topic;
      }

    #channelIsUnique=async (channelName)=>
    {
      let sql="select channelName from channels where channelName="+"\'"+channelName+"\'";
      let fetched=await query(sql);
      if(fetched.length) return false;
      return true;
    }

    #getChannelTopic=async ()=>{
        let channel,topicId=0,topic;
        //clear
        channel = await query("select channelName,memberCount,topic_id from channels where memberCount<4");
        if(channel.length){
          let memberCount=Number(channel[0].memberCount)+1;
          topicId=channel[0].topic_id;
          topic=await this.#randomTopic(1,299,topicId);
          channel = channel[0].channelName;
 
          await query("update channels set memberCount="+memberCount+" where channelName="+"\'"+channel+"\'");
          
        }
        else{
          while(1){
            topic=await this.#randomTopic(1,299,topicId);
            channel=await this.#createChannelName(channelNameLength);
            
            if(this.#channelIsUnique(channel)){ 
            query("insert into channels values("+"\'"+channel+"\'"+","+topic.id+","+1+","+"NOW()"+")");
            break;
          }
          }
        }
        

        return {
          "channel":channel,
          "topic":topic.name
        };


        
    }

    rtcTokenGenerator=async ()=>{
      let resObject;
      resObject = await this.#getChannelTopic();
      const rtcToken=await tokenGen(resObject.channel);
      resObject.token=rtcToken;
      return resObject;
     }

    

}
module.exports= new channelName().rtcTokenGenerator;