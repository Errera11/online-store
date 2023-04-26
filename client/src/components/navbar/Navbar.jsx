import React from 'react';
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Button from "../button/Button";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <NavLink to={'/'}>Store</NavLink>
                </div>
                <div className={styles.btns}>
                    <div className={styles.btn}>
                        <Button>Sign In</Button>
                    </div>
                    <div className={styles.btn}>
                        <Button>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Navbar;