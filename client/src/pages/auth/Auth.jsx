import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {SIGN_IN_ROUTE} from "../../utils/route_constants";
import SignIn from "./signIn";
import SignUp from "./signUp";
const Auth = () => {
    const location = useLocation()
    const signIn = location.pathname == SIGN_IN_ROUTE;
    return (
        <>
            {signIn ? <SignIn /> : <SignUp />}
        </>
    );
};

export default Auth;