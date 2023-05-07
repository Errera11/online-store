import React from 'react';
import styles from './Items.module.css'
import star from '../../../assets/star.png'
import { useNavigate} from "react-router-dom";
import {ITEM_PAGE_ROUTE} from "../../../utils/route_constants";

const Items = ({items}) => {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            {items.map(item => (
                <div onClick={() => navigate(ITEM_PAGE_ROUTE + '/' + item.id)}
                    key={item.id} className={styles.item}>
                    <img className={'w-full h-5/6'} src={process.env.REACT_APP_API_URL + '/' + item.image}/>
                    <div className={'flex flex-row '}>
                        <div className={'text-gray-500 mr-6'}>{item.name}</div>
                        <div className={'items-center'}>
                            <div>
                                Rating: {item.rating}
                            </div>
                            <img className={'w-[15px] h-[15px] items-center'} src={star}/>
                        </div>
                    </div>
                    <div>Price: {item.price}$</div>
                </div>
            ))}

        </div>
    );
};

export default Items;