import React from 'react';
import styles from './Button.module.css'

const Button = ({children, ...props}) => {
    return (
        <div onClick={props?.onClick} className={styles.btn}>
            {children}
        </div>
    );
};

export default Button;