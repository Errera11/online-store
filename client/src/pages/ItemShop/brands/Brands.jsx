import React from 'react';
import {observer} from "mobx-react-lite";
import Selected from "../../../components/selected/Selected";
import styles from './Brands.module.css'

const Brands = observer(({brands, setBrand, selectedBrandId}) => {
    const resetFilter = () => {

    }

    return (
        <div className={styles.container}>
                {brands.map((item) =>
                    (
                        <Selected
                            key={item.id}
                            onClick={() => setBrand(item)}
                            isActive={item.id === selectedBrandId}>
                            {item.name}
                        </Selected>
                    )
                )}
        </div>
    );
});

export default Brands;