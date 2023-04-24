import React from 'react';
import styles from './Auth.module.css'
const Auth = () => {
    return (
        <div className={styles.auth}>
            <div className={styles.container}>
                Auth
                <input type={'text'} placeholder={'email'}/>
                <input type={'text'} placeholder={'password'}/>
                <div className={styles.btns}>
                    <button>Auth</button>
                    <div>Already</div>
                </div>
            </div>
        </div>
    );
};

export default Auth;