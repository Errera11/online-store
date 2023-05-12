import {$authHost} from "./index";
import {CART_ROUTE} from "../utils/route_constants";


export const getCartItems = async (userId) => {
    return await $authHost.get('/store' + CART_ROUTE, {params: {userId}})
}

export const addCartItem = async (userId, itemId) => {
    return await $authHost.post('/store' + CART_ROUTE, {userId, itemId})
}

export const deleteCartItem = async (userId, itemId) => {
    return await $authHost.delete('/store' + CART_ROUTE, {params: {userId, itemId}})
}