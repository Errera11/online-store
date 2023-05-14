const {Cart, CartItem, Item, ItemInfo} = require("../db/models/models");

class CartService {
    async getAll(userId) {
        const cart = await Cart.findOne({where: {userId}})
        const cartItemArr = await CartItem.findAll({where: {cartId: cart.id}});
        const itemsPromise = [];
        cartItemArr.forEach((item) => {
            itemsPromise.push(Item.findOne({where: item.itemId, include: {model: ItemInfo, as: "info"}}))
        })
        const items = await Promise.all(itemsPromise)
        return items;
    }

    async addToCart(userId, itemId) {
        const cart = await Cart.findOne({where: {userId}});
        return await CartItem.create({cartId: cart.id, itemId})
    }

    async removeFromCart(userId, itemId) {
        const cart = await Cart.findOne({where: {userId}});
        return await CartItem.destroy({where: {cartId: cart.id, itemId}})
    }


}

module.exports = new CartService();