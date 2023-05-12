const cartController = require('./../controllers/cartController')
const Router = require('express').Router;

const cartRouter = Router();

cartRouter.get('', cartController.getAll)
cartRouter.post('', cartController.addToCart)
cartRouter.delete('', cartController.removeFromCart)
module.exports = cartRouter