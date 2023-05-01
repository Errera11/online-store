import React from 'react';
import styles from './Auth.module.css'
import Button from "../../components/button/Button";
import {NavLink} from "react-router-dom";

const SignUp = () => {
    return (
        <div className={styles.auth}>
            <div className={styles.container}>
                Sign Up
                <input type={'text'} placeholder={'email'}/>
                <input type={'text'} placeholder={'password'}/>
                <div className={styles.btns}>
                    <div >Don't have an <NavLink className='border-b-4 border-blue-50 rounded-b-md hover:border-red-50 duration-700 ' to={'/signUp'}>account?</NavLink></div>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;