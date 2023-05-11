import React, {useContext, useEffect, useState} from 'react';
import styles from './CartPage.module.css'
import {Context} from "../../index";
import {deleteCartItem, getCartItems} from "../../http/cartApi";
import {observer} from "mobx-react-lite";
import junk from '../../assets/delete.png'

const CartPage = observer(() => {
    const {cart, user} = useContext(Context)
    let id = null;
    if(user.isAuth) id = user.user.id
    useEffect(() => {
        if(user.isAuth) getCartItems(id).then(response => cart.Items = response.data)
    }, [])

    const deleteItem = async (userId, itemId) => {
        if(user.isAuth) await deleteCartItem(userId, itemId)
        cart.Items = cart.Items.filter(item => item.id !== itemId)
    }

    return (
        <div className={styles.container}>
            <div classname={styles.items}>
                {cart.Items.map(item => {
                    return <div key={item.id} className={styles.item}>
                        <div><img src={process.env.REACT_APP_API_URL + '/' + item.image} /></div>
                        <div className={'flex flex-row justify-between'}>
                            <div>{item.name}</div>
                            <div onClick={() => deleteItem(id, item.itemId)}><img src={junk} /></div>
                        </div>
                        <div>{item.rating}</div>
                        <div>{item.price}</div>
                    </div>
                })}
            </div>
        </div>
    );
});

export default CartPage;