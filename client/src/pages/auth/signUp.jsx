import React from 'react';
import styles from './Auth.module.css'
import Button from "../../components/button/Button";
import {NavLink} from "react-router-dom";
const SignIn = () => {
    return (
        <div className={styles.auth}>
            <div className={styles.container}>
                Sign In
                <input type={'text'} placeholder={'email'}/>
                <input type={'text'} placeholder={'password'}/>
                <div className={styles.btns}>
                    <div >Already have an <NavLink className='border-b-4 border-blue-50 rounded-b-md hover:border-red-50 duration-700 ' to={'/signIn'}>account?</NavLink></div>
                    <Button>Sign In</Button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;