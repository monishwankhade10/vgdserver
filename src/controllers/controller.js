const rtctokenGenerator=require("../Channel/Channel");
const Joi=require('joi');
const query=require("../db/db-connection");

class Controller{

    tokenGenerator=async (req,res,next)=>{
       const checkUser=await query("select id from users where gid="+"\'"+req.params.gid+"\'");
       
       if(checkUser.length)
       {
            const rtcToken= await rtctokenGenerator();
            res.json(rtcToken);
       }
       else res.status(403).send("not logged in");

       
    }
    updateCheckUData=async (req,res,next)=>{

    }
    isAlive=async (req,res,next)=>{
        return res.send("yo");

    }



}

module.exports= new Controller;