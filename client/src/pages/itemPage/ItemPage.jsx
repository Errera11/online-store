import React, {useContext, useEffect, useState} from 'react';
import styles from './ItemPage.module.css'
import star from '../../assets/star.png'
import {useParams} from "react-router-dom";
import {getOneItem} from "../../http/itemApi";
import {addCartItem, getCartItems} from "../../http/cartApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Button from "../../components/button/Button";

const ItemPage = observer(() => {
    const [item, setItem] = useState({});
    const {id} = useParams();
    const {user, cart, devices} = useContext(Context)
    useEffect(() => {
        getOneItem(id).then(response => setItem(response.data))
        if(user.isAuth) {
            getCartItems(user.user.id).then(response => cart.Items = response.data)
        }
    }, [])

    const addToCart = async (itemId) => {
        if(!cart.Items.some(item => item.id == itemId)) {
            if (user.isAuth) await addCartItem(user.user.id, itemId);
            cart.addToCart(devices.devices.find(item => item.id == itemId))
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.view}>
                <div>
                    <img className={'w-full h-full'} src={process.env.REACT_APP_API_URL + '/' + item.image}/>
                </div>
                <div className={styles.rate}>
                    <div className={'text-center text-2xl'}>{item.name}</div>
                    <div className={'absolute flex justify-center top-[140px] text-6xl'}>{item.rating}</div>
                    <img className={'bg-cover'} src={star}/>
                </div>
                <div className={styles.price}>
                    <h3>Starts with {item.price}</h3>
                    <div className={'flex justify-center border-2 p-4 box-content rounded-2xl cursor-pointer'}>
                    {cart.Items.some(el => el.id == item.id) ?
                        <div className={'text-center'}>Item already in cart</div>
                        :
                        <div className={'text-center'} onClick={() => addToCart(id)}>Add to cart</div>
                    }
                    </div>
                </div>
            </div>
            <div className={'w-full'}>
                <div className={'text-3xl m-[20px]'}>
                    Characteristics
                </div>
                <div className={'flex flex-column w-full'}>
                    <div className={'w-full'}>
                        {item.info?.map(item =>
                            <div>
                                <div className={'p-5 bg-gray-100'}>
                                    {item.title}
                                </div>
                                <div className={'p-5 bg-gray-200'}>
                                    {item.description}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ItemPage;