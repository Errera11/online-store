import {$host} from "./index";

export const signInApi = async({email, password}) => {
    return await $host.post('/store/user/signIn', {email, password})
}

export const signUpApi = async({email, password}) => {
    return await $host.post('/store/user/signUp', {email, password})
}