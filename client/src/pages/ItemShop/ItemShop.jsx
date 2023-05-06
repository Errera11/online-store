import React, {useContext, useEffect, useState} from 'react';
import styles from './ItemShop.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import Types from "./types/Types";
import Brands from "./brands/Brands";
import Items from "./items/Items";
import {getBrands, getItems, getTypes} from "../../http/itemApi";

const ItemShop = observer(() => {
    const {devices} = useContext(Context);
    const [items, setItems] = useState([]);
    const [types, setTypes] = useState([]);
    const [brands, setBrands] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getItems().then(response => {
            devices.devices = response.data.rows;
        })
        getTypes().then(response => {
            devices.types = response.data;
        })
        getBrands().then(response => {
            devices.brands = response.data;
        })
    }, [])
    const setBrand = (brand) => {
        devices.selectedBrand = brand;
    }

    const setType = (type) => {
        devices.selectedType = type;
    }

    return (
        <div className={styles.container}>
            <div className={styles.brands}>
                <Brands
                    brands={devices.brands}
                    setBrand={setBrand}
                    selectedBrandId={devices.selectedBrand.id}/>
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
        </div>
    );
});

export default ItemShop;