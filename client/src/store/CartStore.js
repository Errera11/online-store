import {makeAutoObservable} from "mobx";


class CartStore {
    constructor() {
        this._items = [];
        makeAutoObservable(this)
    }
    get Items() {
        return this._items;
    }

    set Items(value) {
        this._items = value;
    }

    addToCart(item) {
        this._items.push(item);
    }

    removeFromCart(itemId) {
        this._items = this._items.filter(item => item.id !== itemId)
    }
}

export default CartStore;