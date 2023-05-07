import React, {useEffect, useState} from 'react';
import styles from './ItemPage.module.css'
import star from '../../assets/star.png'
import {useParams} from "react-router-dom";
import {getOneItem} from "../../http/itemApi";

const ItemPage = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();
    useEffect(() => {
        getOneItem(id).then(response => setItem(response.data))
    }, [])

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
                    <button className={'w-fit border-2 p-4 rounded-2xl'}>Add to cart</button>
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
};

export default ItemPage;