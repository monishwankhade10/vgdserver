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