import React, {useContext} from 'react';
import styles from './ItemShop.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../App";
import Types from "./types/Types";
import Brands from "./brands/Brands";
import Items from "./items/Items";

const ItemShop = observer(() => {
    const {devices} = useContext(Context);
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