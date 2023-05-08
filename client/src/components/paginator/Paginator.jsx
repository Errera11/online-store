import React, {useContext, useState} from 'react';
import styles from './Paginator.module.css'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
const Paginator = observer (({pagesCount}) => {

    const {devices} = useContext(Context)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.container}>
            <div className={styles.pages}>
                {pages.map(item => {
                    return (
                        <div onClick={() => devices.currentPage = item} className={styles.item + ' ' + (
                            devices.currentPage == item ? 'bg-blue-50' : ''
                        )}>
                            {item}
                    </div>
                    )
                })}
            </div>
        </div>
    );
});

export default Paginator;