import React, {useEffect, useState} from 'react';
import styles from './ItemPage.module.css'
import star from '../../assets/star.png'
import {useParams} from "react-router-dom";
import {getOneItem} from "../../http/itemApi";

const ItemPage = () => {
    // const item = {
    //     id: 1,
    //     name: 'example',
    //     price: 1000,
    //     rating: 5,
    //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYz2huNWs1qzjomU38a88RbCqDoddasQv6Gw&usqp=CAU'
    // };
    // const description = [
    //     {id: 1, title: 'example1', description: 'example11'},
    //     {id: 2, title: 'example2', description: 'example22'},
    //     {id: 3, title: 'example3', description: 'example33'},
    //     {id: 4, title: 'example4', description: 'example44'}
    // ]
    const [item, setItem] = useState({});
    const {id} = useParams();
    useEffect(() => {
        getOneItem(id).then(response => console.log(response))
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.view}>
                <div>
                    <img className={'w-full h-full'} src={item.img}/>
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
                        {/*{item.description.map(item =>*/}
                        {/*    <div >*/}
                        {/*        <div className={'p-5 bg-gray-100'}>*/}
                        {/*            {item.name}*/}
                        {/*        </div>*/}
                        {/*        <div className={'p-5 bg-gray-200'}>*/}
                        {/*            {item.description}*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;