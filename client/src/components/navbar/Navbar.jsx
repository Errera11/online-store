import React, {useContext} from 'react';
import styles from "./Navbar.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import Button from "../button/Button";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, CART_ROUTE} from "../../utils/route_constants";

const Navbar = observer(() => {

    const navigate = useNavigate()
    const {user} = useContext(Context)

    const logout = () => {
        user.user = {};
        user.isAuth = false;
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <NavLink to={'/'}>Store</NavLink>
                </div>
                <div className={styles.btns + ' ' + 'mr-5' + ' ' + 'items-center'}>
                    <div>
                        <NavLink to={'/cart'}>Cart</NavLink>
                    </div>
                    {user.isAuth ?
                        <>
                            <div className={'mx-5'}>
                                <NavLink to={ADMIN_ROUTE}>Admin</NavLink>
                            </div>
                            <div className={'mx-5'}>
                                {user.user.email}
                            </div>
                            <Button onClick={logout}>Sign Out</Button>
                        </>
                        :
                        <>
                            <div className={'mx-5'} onClick={() => navigate('/signIn')}>
                                <Button>Sign In</Button>
                            </div>
                            <div onClick={() => navigate('/signUp')}>
                                <Button>Sign Up</Button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
        ;
});

export default Navbar;