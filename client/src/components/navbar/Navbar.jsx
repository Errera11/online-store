import React from 'react';
import styles from "./Navbar.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import Button from "../button/Button";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <NavLink to={'/'}>Store</NavLink>
                </div>
                <div className={styles.btns}>
                    <div className={styles.btn} onClick={() => navigate('/signIn')}>
                        <Button>Sign In</Button>
                    </div>
                    <div className={styles.btn} onClick={() => navigate('/signUp')}>
                        <Button>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Navbar;