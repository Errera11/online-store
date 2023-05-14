import {$authHost, $host} from "./index";

export const getBrands = async () => {
    return await $host.get('/store/brand')
}
export const getTypes = async () => {
    return await $host.get('/store/type')
}
export const getItems = async (limit = 1, page = 1, typeId, brandId) => {
    return await $host.get('/store/item', {params: {
            limit, page, typeId, brandId
        }})
}
export const getOneItem = async (id) => {
    return await $host.get('/store/item/' + id)
}

export const postBrand = async (brand) => {
    return await $authHost.post('/store/brand', brand)
}
export const postType = async (type) => {
    return await $authHost.post('/store/type', type)
}
export const postItem = async (item) => {
    return await $authHost.post('/store/item', item)
}

export const rateStoreItem = async (rate, userId, itemId) => {
    return await $authHost.put('/store/item', {rate, userId, itemId})
}

export const getUserRates = async (userId) => {
    return await $authHost.get('/store' + '/item/userRates', {params: {userId}})
}
