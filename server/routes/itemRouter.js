const Router = require('express').Router;
const itemRouter = Router();
const itemController = require('../controllers/itemController');
const checkRoleMiddleware = require("../middlewares/checkAuthAndRoleMiddleware");

itemRouter.get('', itemController.getAll);
itemRouter.get('/userRates', itemController.getUserRates);
itemRouter.post('', checkRoleMiddleware('ADMIN'), itemController.create);
itemRouter.get('/:id', itemController.getOne);
itemRouter.put('', itemController.rate);

module.exports = itemRouter;
