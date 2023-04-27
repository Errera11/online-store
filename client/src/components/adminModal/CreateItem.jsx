import React, {useContext, useState} from 'react';
import Button from "../button/Button";
import Modal from "../Modal";
import {Context} from "../../App";

const CreateItem = ({onHide, show}) => {
    const {devices} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState()
    const [brand, setBrand] = useState(0)
    const [type, setType] = useState(0)

    return (
        <Modal onHide={onHide} show={show}>
            <div className={'mb-8'}>Create Item</div>
            <input className={'p-2 m-4 rounded-2xl'}
                   placeholder={'Item name'}
                   value={name}
                   onChange={e => setName(e.target.value)}/>
            <input className={'p-2 m-4 rounded-2xl'}
                   placeholder={'Item price'}
                   value={price}
                   onChange={e => setPrice(e.target.value)}/>
            <input className={'p-2 m-4 rounded-2xl'} type={'file'}
                   onChange={e => setFile(e.target.files[0])}/>
            <div className={'p-2 m-4 rounded-2xl'}>
                <select
                    className={'p-4 border-none w-2/3'}
                    onChange={e => setType(e.target.value)}>
                    {devices.types.map(type => {
                        return <option value={type.id}>{type.name}</option>
                    })}
                </select>
            </div>
            <div className={'p-2 m-4'}>
                <select className={'p-4 border-none w-2/3'}
                    onChange={e => setBrand(e.target.value)}>
                    {devices.brands.map(brand => {
                        return <option value={brand.id}>{brand.name}</option>
                    })}
                </select>
            </div>
            <Button>Create item</Button>
        </Modal>
    );
};

export default CreateItem;