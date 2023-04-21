const Router = require('express').Router;
const typeRouter = Router();
const typeController = require('../controllers/typeController');

typeRouter.get('', typeController.getAll)
typeRouter.post('', typeController.create)

module.exports = typeRouter;
