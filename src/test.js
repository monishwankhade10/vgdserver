import agora from "../src/agora/AgoraCustom";
import db from "../src/db/db-connection";
import tokenGen from "../src/Channel/Channel";
async function foo(chann){


const tokenob=await db("select sleep(2)as sa");
console.log(tokenob[0].sa);
}


foo();
















// let channelName="NKA8NM",id=53,memberCount=3,channel="NKDAKM";
// let topic={
//     "id":32
// }
// let sql1,sql2,sql3,sql4,sql5,sql6;
// sql1="select topic from topics where topic_id="+id;
// sql2="select channelName from channels where channelName="+"\'"+channelName+"\'";
// sql3="select channelName,memberCount,topic_id from channels where memberCount<4";
// sql4="update channels set memberCount="+memberCount+" where channelName="+"\'"+channel+"\'";
// sql5="insert into channels values("+"\'"+channel+"\'"+","+topic.id+","+1+","+"NOW()"+")";

// foo();

// console.log(sql1,"\n",sql2,"\n",sql3,"\n",sql4,"\n",sql5);


