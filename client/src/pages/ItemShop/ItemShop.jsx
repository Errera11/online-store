import React, {useContext, useEffect, useState} from 'react';
import styles from './ItemShop.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import Types from "./types/Types";
import Brands from "./brands/Brands";
import Items from "./items/Items";
import {getBrands, getItems, getTypes} from "../../http/itemApi";
import Paginator from "../../components/paginator/Paginator";
import Selected from "../../components/selected/Selected";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";

const ItemShop = observer(() => {
    const {devices} = useContext(Context);
    const [isLoading, setLoading] = useState(true)
    const [pagesCount, setPagesCount] = useState(1);

    useEffect(() => {
        getItems().then(response => {
            devices.devicesTotalCount = response.data.count;
            devices.devices = response.data.rows;
            setPagesCount(Math.ceil(devices.devicesTotalCount / 2))
        })
        getTypes().then(response => {
            devices.types = response.data;
        })
        getBrands().then(response => {
            devices.brands = response.data;
        })
    }, [])

    useEffect(() => {
        getItems(2, devices.currentPage, devices.selectedType.id, devices.selectedBrand.id).then(response => {
            devices.devices = response.data.rows;
            devices.devicesTotalCount = response.data.count;
            setPagesCount(Math.ceil(devices.devicesTotalCount / 2))
        }).finally(setLoading(false))
    }, [devices.currentPage, devices.selectedType, devices.selectedBrand])
    const setBrand = (brand) => {
        devices.selectedBrand = brand;
    }

    const setType = (type) => {
        devices.selectedType = type;
    }

    const resetFilter = () => {
        devices.selectedType = {};
        devices.selectedBrand = {};
    }

    if(isLoading) return <Loader />

    return (
        <div className={styles.container}>
            <div className={styles.brands}>
                <Brands
                    brands={devices.brands}
                    setBrand={setBrand}
                    selectedBrandId={devices.selectedBrand.id}/>
                <div className={'mr-5'}>
                    <Button onClick={resetFilter}>Reset filter</Button>
                </div>
            </div>
            <div className={styles.types}>
                <Types
                    setType={setType}
                    types={devices.types}
                    selectedTypeId={devices.selectedType.id}/>
            </div>
            <div className={styles.items}>
                <Items
                    items={devices.devices}
                />
            </div>
            <div className={styles.paginator}>
                <Paginator pagesCount={pagesCount}/>
            </div>
        </div>
    );
});

export default ItemShop;