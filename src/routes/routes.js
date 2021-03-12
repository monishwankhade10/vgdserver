const controllerMiddleware=require("../controllers/controller");
const awaitRequestHandler=require("../middleware/awaitRequestHandler.middleware");
const nocache=require("../middleware/nocache.middleware");
const controller=require("../controllers/controller");
const router = (app)=>{
  app.post('/api/token',nocache,awaitRequestHandler(controller.tokenGenerator));
  app.post('/api/userdata',nocache,awaitRequestHandler(controller.updateCheckUData))
  app.post('/api/isalive',nocache,awaitRequestHandler(controller.isAlive)); 
}
  module.exports = router;