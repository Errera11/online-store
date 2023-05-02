import React, {useState} from 'react';
import styles from './Auth.module.css'
import Button from "../../components/button/Button";
import {NavLink} from "react-router-dom";

const SignUp = ({onClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={styles.auth}>
            <div className={styles.container}>
                Sign Up
                <input value={email}
                       onChange={e => setEmail(e.target.value)}
                    type={'text'} placeholder={'email'}/>
                <input value={password}
                       onChange={e => setPassword(e.target.value)}
                    type={'password'} placeholder={'password'}/>
                <div className={styles.btns}>
                    <div >Already have an <NavLink className='border-b-4 border-blue-50 rounded-b-md hover:border-red-50 duration-700 ' to={'/signIn'}>account?</NavLink></div>
                    <Button onClick={() => {
                        console.log(onClick)
                        onClick(email, password)
                    }}>Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;