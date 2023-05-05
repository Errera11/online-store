import React, {useContext} from 'react';
import styles from "./Navbar.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import Button from "../button/Button";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Navbar = observer(() => {

    const navigate = useNavigate()
    const {user} = useContext(Context)
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <NavLink to={'/'}>Store</NavLink>
                </div>
                {user.isAuth ?
                    <div className={styles.btns + ' ' + 'mr-5' + ''}>
                        <div>
                            Admin
                        </div>
                        <div className={'mx-5'}>
                            {user.user.email}
                        </div>
                    </div>
                    :
                    <div className={styles.btns}>
                        <div className={styles.btn} onClick={() => navigate('/signIn')}>
                            <Button>Sign In</Button>
                        </div>
                        <div className={styles.btn} onClick={() => navigate('/signUp')}>
                            <Button>Sign Up</Button>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
        ;
});

export default Navbar;