import {$authHost, $host} from "./index";

export const getBrands = async () => {
    return await $host.get('/store/brand')
}
export const getTypes = async () => {
    return await $host.get('/store/type')
}
export const getItems = async () => {
    return await $host.get('/store/item')
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
