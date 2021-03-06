const { json } = require('express');
const express=require('express');
const {RtcTokenBuilder, RtcRole} = require('agora-access-token');
const Joi=require('joi');
let port=process.env.PORT;
const mysql = require('mysql');
  //on deploy change to environment var
  const appID = 'da3489a3bf204767b69741d8ec03f65d';
  const appCertificate = 'e8cac1059d0f421883217de281ed9f9d';
const app=express();
app.use(express.json());

let con = mysql.createConnection({
    host: "freedb.tech",
    user: "freedbtech_monishravinandan",
    password: "Monish@1234",
    database: "freedbtech_vgddb"
  });

  app.get('/api/roomcode',(req,res)=>{
    con.connect((err)=>{
     if(err) throw err;
     let sql="select roomToken from room where memberCount<4";
     let res;
     con.query(sql,(err,result)=>{
       if(err) throw err;
       if(result.length==0) 
       res=result;
     }); 
    });
    //res.send(res);
  } );

  app.post('/api/userinfo',(req,res)=>{

  });



app.listen(port,()=>{
  console.log('server running on port '+port);
});


//functions

function tokenGen() {

  //generate channel name
  const channelName = '7d72365eb983485397e3e3f9d460bdda';
  //get uid from client = 0
  const uid = 2882341273;
  const role = RtcRole.SUBSCRIBER;
}

const nocache = (req, resp, next) => {
  resp.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  resp.header('Expires', '-1');
  resp.header('Pragma', 'no-cache');
  next();
};