const {RtcTokenBuilder, RtcRole} = require('agora-access-token');
// this.appID = process.env.APP_ID;
        // this.appCertificate =process.env.APP_CERTIFICATE;
        //TODO:
const appID ='da3489a3bf204767b69741d8ec03f65d';
const appCertificate ='e8cac1059d0f421883217de281ed9f9d';
class AgoraCustom
  {
      constructor(appID,appCertificate)
      {
        this.appID =appID;
        this.appCertificate =appCertificate;
      }

      tokenGen=async (channelName)=>{
        const role = RtcRole.SUBSCRIBER;
      
        const expirationTimeInSeconds = 3600
      
        const currentTimestamp = Math.floor(Date.now() / 1000)
      
        const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
        const tokenA = RtcTokenBuilder.buildTokenWithUid(this.appID, this.appCertificate, channelName, 0, role, privilegeExpiredTs);
        return tokenA;
      }

    }

module.exports=new AgoraCustom(appID,appCertificate).tokenGen;