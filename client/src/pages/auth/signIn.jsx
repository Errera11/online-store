
import React, {useState} from 'react';
import styles from './Auth.module.css'
import Button from "../../components/button/Button";
import {NavLink} from "react-router-dom";
const SignIn = ({onClick, error}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={styles.auth}>
            <div className={styles.container}>
                Sign In
                <input value={email}
                       onChange={e => setEmail(e.target.value)}
                    type={'text'} placeholder={'email'}/>
                <input value={password}
                       onChange={e => setPassword(e.target.value)}
                    type={'password'} placeholder={'password'}/>
                {error &&  <div className={'text-red-500 border-b-2 border-red-500'}>{error}</div>}
                <div className={styles.btns}>
                    <div >Don't have an <NavLink className='border-b-4 border-blue-50 rounded-b-md hover:border-red-50 duration-700 ' to={'/signUp'}>account?</NavLink></div>
                    <Button onClick={() => onClick(email, password)}>Sign In</Button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;