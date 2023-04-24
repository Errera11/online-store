import React from 'react';
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <NavLink to={'/'}>Store</NavLink>
                </div>
                <div className={styles.btns}>
                    <div className={styles.btn}>
                        Sign In
                    </div>
                    <div className={styles.btn}>
                        Sign Up
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Navbar;