const Router = require('express').Router;
const itemRouter = Router();
const itemController = require('../controllers/itemController');

itemRouter.get('', itemController.getAll);
itemRouter.post('', itemController.create);
itemRouter.get('/:id', itemController.getOne);

module.exports = itemRouter;
