const { Router } = require('express');
//const model = require('../models/carOwners');
const mongoose = require('mongoose');
const carOwnersModel = mongoose.model('carOwners');
const carOwnersController = require('../controllers/carOwnerController')(carOwnersModel);


const carOwnersRouter = Router();

const router = () => {
  carOwnersRouter.route('/')
    .get(carOwnersController.getAll)
    carOwnersRouter.route('/filter/')
    .get(carOwnersController.getByFilter)
    carOwnersRouter.route('/:id')
    .get(carOwnersController.getById)

  return carOwnersRouter;
}

module.exports = router;