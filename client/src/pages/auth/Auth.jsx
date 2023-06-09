import React, {useContext, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {ITEM_SHOP_ROUTE, SIGN_IN_ROUTE} from "../../utils/route_constants";
import SignIn from "./signIn";
import SignUp from "./signUp";
import {signInApi, signUpApi} from "../../http/userAPI";
import {Context} from "../../index";

const Auth = () => {
        const {user} = useContext(Context)

        const location = useLocation()
        const isSignIn = location.pathname == SIGN_IN_ROUTE;

        const navigate = useNavigate();
        const [error, setError] = useState('');

        if (isSignIn) {
            const signInHandler = async (email, password) => {
                try {
                    const usr = await signInApi({email, password});
                    user.isAuth = true
                    user.user = usr;
                    navigate(ITEM_SHOP_ROUTE);
                } catch (e) {
                    setError(e.response.data.message);
                }
            }
            return <><SignIn error={error} onClick={signInHandler}/></>
        }
        const signUpHandler = async (email, password) => {
            try {
                const usr = await signUpApi({email, password});
                user.isAuth = true
                user.user = usr;
                navigate(ITEM_SHOP_ROUTE);
            } catch (e) {
                setError(e.response.data.message);
            }
        }
        return <><SignUp error={error} onClick={signUpHandler}/></>

    }
;

export default Auth;