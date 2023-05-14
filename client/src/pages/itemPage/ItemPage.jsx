import React, {useContext, useEffect, useState} from 'react';
import styles from './ItemPage.module.css'
import star from '../../assets/star.png'
import {useParams} from "react-router-dom";
import {getOneItem, rateStoreItem, getUserRates} from "../../http/itemApi";
import {addCartItem, getCartItems} from "../../http/cartApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Rate from "../../components/rate/Rate";

const ItemPage = observer(() => {
    const [item, setItem] = useState({});
    const {id} = useParams();
    const {user, cart, devices} = useContext(Context)
    const [isCanRate, setIsCanRate] = useState(0)
    const [userRates, setUserRates] = useState([])


    useEffect(() => {
        getOneItem(id).then(response => setItem(response.data))
        if (user.isAuth) {
            getCartItems(user.user.id).then(response => cart.Items = response.data)
            getUserRates(user.user.id).then(response => setUserRates(response.data))
        }
    }, [userRates])

    const addToCart = async (itemId) => {
        if (!cart.Items.some(item => item.id == itemId)) {
            if (user.isAuth) await addCartItem(user.user.id, itemId);
            cart.addToCart(devices.devices.find(item => item.id == itemId))
        }
    }

    const rateItem = (rate) => {
        if (!user.user.id) return setIsCanRate(prev => prev + 1)
        setIsCanRate(0);
        rateStoreItem(rate, user.user.id, id).then(response => {
            setUserRates(prev => [...prev, response.data])
        })
    }

    return (
        <div className={styles.container} id={'popUp'}>
            {(isCanRate != 0) && <div
                className={'fixed bottom-0 right-0 m-8 bg-red-50 rounded-2xl p-8 text-center' +
                    'transition-opacity ease-out duration-700 opacity-100 hover:opacity-0'}>
                You must authorize to rate an item!
            </div>}
            <div className={styles.view}>
                <div>
                    <img className={'w-full h-full'} src={process.env.REACT_APP_API_URL + '/' + item.image}/>
                </div>
                <div className={styles.rate}>
                    <div className={'text-center text-2xl'}>{item.name}</div>
                    <div className={'absolute flex justify-center top-[140px] text-6xl'}>{item.rating}</div>
                    <img className={'bg-cover'} src={star}/>
                    <div className={'bg-red-50'}/>

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
            <div className={'flex justify-center m-12'}>
                <Rate isRated={userRates.some(rate => rate.itemId == item.id)}
                      rate={userRates?.find(rate => rate.itemId == item.id)?.rate} onClick={(rate) => rateItem(rate)}/>
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