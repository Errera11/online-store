const cartService = require("../service/cart-service");

class CartController {
    async getAll(req, res, next) {
        const {userId} = req.query;
        console.log(req.query)
        const cartItems = await cartService.getAll(userId)
        res.status(200).json(cartItems)
    }

    async addToCart(req, res, next) {
        const {userId, itemId} = req.body;
        const item = await cartService.addToCart(userId, itemId);
        res.status(200).json(item)
    }

    async removeFromCart(req, res, next) {
        const {userId, itemId} = req.query;
        const item = await cartService.removeFromCart(userId, itemId);
        res.status(200).json(item)
    }
}

module.exports = new CartController();