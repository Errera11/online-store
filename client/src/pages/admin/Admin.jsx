import React, {useState} from 'react';
import styles from './Admin.module.css';
import Button from "../../components/button/Button";
import CreateItem from "../../components/adminModal/CreateItem";
import CreateBrand from "../../components/adminModal/CreateBrand";
import CreateType from "../../components/adminModal/CreateType";

const Admin = () => {
    const [isBrand, setBrand] = useState(false);
    const [isType, setType] = useState(false);
    const [isItem, setItem] = useState(false);

    return (
        <>
            <>
                <CreateItem onHide={() => setItem(false)} show={isItem}/>
                <CreateBrand onHide={() => setBrand(false)} show={isBrand}/>
                <CreateType onHide={() => setType(false)} show={isType}/>
            </>
            <>
                <div className={styles.container}>

                    <div className={'font-bold text-5xl mb-20'}>Admin</div>
                    <Button onClick={() => setBrand(true)} className={styles.brandButton}>
                        Create item brand
                    </Button>
                    <Button onClick={() => setType(true)} className={styles.typeButton}>
                        Create item type
                    </Button>
                    <Button onClick={() => setItem(true)} className={styles.itemButton}>
                        Create item
                    </Button>
                </div>
            </>
        </>

    );
};

export default Admin;