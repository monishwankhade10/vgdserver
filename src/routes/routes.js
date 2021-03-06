const controllerMiddleware=require("../controllers/controller");
const awaitRequestHandler=require("../middleware/awaitRequestHandler.middleware");
const nocache=require("../middleware/nocache.middleware");
const controller=require("../controllers/controller");
const router = (app)=>{
  app.get('/api/token/:gid',nocache,awaitRequestHandler(controller.tokenGenerator));
  app.post('/api/userdata',nocache,awaitRequestHandler(controller.updateCheckUData))
  app.get('/api/isalive/:id',nocache,awaitRequestHandler(controller.isAlive)); 
}
  module.exports = router;



  // function verifyRequest(req){
  //   //TODO: doo something
  //     return true;
  // }
  
  // function routineRunner()
  // { //TODO:check this shit
  //   //queryRunner("delete from room where userCount=0 or `timestamp` &gt; DATE_SUB(NOW(), INTERVAL 60 MINUTE)");
  // }
  // //REMEMBER: mysql method CAST(timestamp as time) CAST(timestamp as date) 
  // // use rows.length to determine if an empty array is returned

  
/* app.post('/api/userinfo',(req,res)=>{
        //res.json
        if(!verifyRequest(req))return res.status(403);
    
        const schema= Joi.object(
          {
            name:Joi.string().min(5).required(),
            id: Joi.number().min(5).required(),
            email: Joi.string().min(9).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
          }
        );
        const valditionResult=schema.validate;
        if(valditionResult.error) return res.status(403).send(valditionResult.error);
        let id,name,email,sql;
        id=req.body.id;
        name=req.body.name;
        email=req.body.email;
        sql="select id from user where id="+id;
        if(queryRunner(sql).length) res.status(200);
        else
        {
          sql="insert into user(id,name,email) values("+id+","+name+","+email+")";
          res.status(200);
        }
      });*/


  /* app.get('/api/token',nocache,async (req,res)=>{
        let  sqlArray=["SELECT * FROM users WHERE uid="+req.query.uid,"select channelName from room where memberCount<4"];
        queryRunner(sqlArray,requestProcessor);
        let sql="SELECT * FROM users WHERE uid="+req.query.uid;
        checkUserInDb=queryRunner(sql);
  
        if(!checkUserInDb.length) return res.status(403).send("you need to login first");
        sql="select channelName from room where memberCount<4";
        let fetchedChannel=queryRunner(sql);
        if(!fetchedChannel.length)
        { 
          while(true)
          {
            channelName=createChannelName(6);
            if(ifChannelIsUnique(channelName))
            { let topicId,memberCount=1;
              sql="insert into channels values("+"\""+channelName+"\""+","+topicId+","+memberCount+",NOW())";
              queryRunner();
              break;
            }
         }
          
        }
        else
        {
          channelName=fetchedChannel[0].channelName;
        }
        rtcToken=tokenGen(channelName,uid);
    
        res.json({
          "channelName": channelName,
          "rtcToken": rtcToken,
          "topic":topic
        });
        routineRunner();
      } );*/