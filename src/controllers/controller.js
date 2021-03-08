const rtctokenGenerator=require("../Channel/Channel");
const query=require("../db/db-connection");
const fetch=require("node-fetch");
const addUser=require("../controllers/userController");
class Controller{
    #googleAuth=async (authToken)=>{
        const uData= await fetch('https://oauth2.googleapis.com/tokeninfo?id_token='+authToken)
        .then(res =>{
            if(res.status===200)
            return res.json();
            else
            return res.json();
        });

        return uData;
    }


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
        const uData= await this.#googleAuth(req.body.authToken);
        if(uData){
               const response= await addUser(uData);
               if(response.affectedRows==1)
               return res.status(200).send("nice");
               
               return res.status(500).send("Something is wrong on our side");
        }
        else{
            res.status(400).send("Fuck you client ");
        }
    }
    isAlive=async (req,res,next)=>{
        const uData= await this.#googleAuth(req.body.authToken);
        const q="update users set lastOnline=NOW() where gid="+"\'"+uData.sub+"\'";
        const response=await query(q);
        if(response.affectedRows==1) return res.status(200).send("nice");
        res.status(400).send("fuck you");
        
    }



}

module.exports= new Controller;