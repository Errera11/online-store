import React from 'react';
import styles from './Selected.module.css'

const Selected = ({children, isActive, ...props}) => {
    return (
        <div onClick={props.onClick} className={isActive ? styles.active + ' ' + styles.item : styles.item}>
            {children}
        </div>
    );
};

export default Selected;