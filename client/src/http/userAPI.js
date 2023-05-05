import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const signInApi = async({email, password}) => {
    const {data} =  await $host.post('/store/user/signIn', {email, password});
    const decodedUser = jwt_decode(data.token);
    localStorage.setItem('token', data.token)
    return decodedUser
}

export const signUpApi = async({email, password}) => {
    const {data} = await $host.post('/store/user/signUp', {email, password})
    const decodedUser = jwt_decode(data.token);
    localStorage.setItem('token', data.token)
    return decodedUser;
}

export const checkToken = async () => {
    const {data} = await $authHost.get('store/user/auth')
    const decodedUser = jwt_decode(data.token);
    return decodedUser;
}