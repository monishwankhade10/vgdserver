const routes = require('./routes/routes');
const express=require('express');
const nocache=require("../src/middleware/nocache.middleware");
let port=process.env.PORT;
const app=express();
app.use(express.json());
routes(app);
app.all('*',nocache,(req,res)=>{
  res.status(404).send('nothing here bruh try using some routes');
});
app.listen(port,()=>{
  console.log('server running on port '+port);
});