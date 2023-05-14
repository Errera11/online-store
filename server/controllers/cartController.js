const cartService = require("../service/cart-service");

class CartController {
    async getAll(req, res, next) {
        try {
            const {userId} = req.query;
            const cartItems = await cartService.getAll(userId)
            res.status(200).json(cartItems)
        } catch(e) {
            next(e)
        }

    }

    async addToCart(req, res, next) {
        try {
            const {userId, itemId} = req.body;
            const item = await cartService.addToCart(userId, itemId);
            res.status(200).json(item)
        } catch(e) {
            next(e)
        }
    }

    async removeFromCart(req, res, next) {
        try {
            const {userId, itemId} = req.query;
            const item = await cartService.removeFromCart(userId, itemId);
            res.status(200).json(item)
        } catch (e) {
            next(e)
        }

    }


}

module.exports = new CartController();