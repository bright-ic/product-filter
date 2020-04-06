const { Router } = require("express");
const carOwnersRoute = require("./carOwnersRoutes");

const APIRouteManager = Router();

const router = (app) => {
  APIRouteManager.use('/v1/carowners', carOwnersRoute());
  return APIRouteManager;
}

module.exports = router;