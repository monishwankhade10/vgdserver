const { json } = require('express');
const express=require('express');
const {RtcTokenBuilder, RtcRole} = require('agora-access-token');
const Joi=require('joi');
let port=process.env.PORT;
const mysql = require('mysql');
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



app.listen(port,()=>{
  console.log('server running on port '+port);
});

function tokenGen() {
  const appID = 'da3489a3bf204767b69741d8ec03f65d';
  const appCertificate = '5CFd2fd1755d40ecb72977518be15d3b';
  //generate channel name
  const channelName = '7d72365eb983485397e3e3f9d460bdda';
  //get uid from client = 0
  const uid = 2882341273;
  const role = RtcRole.SUBSCRIBER;
}