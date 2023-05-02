import React, {useContext} from 'react';
import {useLocation} from "react-router-dom";
import {SIGN_IN_ROUTE} from "../../utils/route_constants";
import SignIn from "./signIn";
import SignUp from "./signUp";
import {signInApi, signUpApi} from "../../http/userAPI";
import {Context} from "../../App";
import jwt_decode from 'jwt-decode'

const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isSignIn = location.pathname == SIGN_IN_ROUTE;
    if(isSignIn) {
        const signInHandler = async (email, password) => {
            const response = await signInApi({email, password});
            const decodedUser = jwt_decode(response.data.token);
            user.isAuth = true
            user.user = decodedUser;
        }
        return <><SignIn onClick={signInHandler}/></>
    }
    const signUpHandler = async (email, password) => {
        const response = await signUpApi({email, password});
        const decodedUser = jwt_decode(response.data.token);
        user.isAuth = true
        user.user = decodedUser;
    }
    return <><SignUp onClick={signUpHandler}/></>
};

export default Auth;