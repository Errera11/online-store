import React, {useContext, useState} from 'react';
import Button from "../button/Button";
import Modal from "../Modal";
import {Context} from "../../index";
import {postItem} from "../../http/itemApi";


const CreateItem = ({onHide, show}) => {
    const {devices} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState()
    const [brand, setBrand] = useState(1)
    const [type, setType] = useState(1)
    const [info, setInfo] = useState([[{id: new Date(), title: '', description: ''}]])

    const deleteInfo = (id) => {
        setInfo([...info.filter(item => item.id !== id)]);
        if (info.length < 1) setInfo([{id: new Date(), title: '', description: ''}]);
    }
    const addInfo = () => {
        setInfo([...info, {id: new Date(), title: '', description: ''}]);
    }

    const createItem = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('image', image);
        formData.append('brandId', brand.toString());
        formData.append('typeId', type.toString());
        formData.append('info', JSON.stringify(info.splice(0, info.length - 1)));
        postItem(formData).then(data => {
            onHide()
        });
    }

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
                   onChange={e => setImage(e.target.files[0])}/>
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
            <div>
                <div>Characteristics</div>
                <div className={'flex flex-col '}>{info.map((item, index) => {
                    if(index + 1 == info.length) return
                    return <div key={item.id} className={'flex flex-row m-2 justify-center'}>
                        <div>{item.title}:      {item.description}</div>
                        <div className={'cursor-pointer ml-2'} onClick={() => deleteInfo(item.id)}>X</div>
                    </div>
                })}</div>

            </div>
            <input className={'p-2 m-2 border-2 border-black rounded-s'} type={'text'} placeholder={'Info title'} onChange={e => {
                const item = info.pop();
                item.title = e.target.value;
                setInfo([...info, {...item}])
            }}/>
            <input className={'p-2 m-2 border-2 border-black rounded-s'} type={'text'} placeholder={'Info description'}
                   onChange={e => {
                       const item = info.pop();
                       item.description = e.target.value;
                       setInfo([...info, item])
                   }}/>
            <Button onClick={() => addInfo()}>Add characteristic</Button>
            <Button onClick={() => createItem()}>Create item</Button>
        </Modal>
    );
};

export default CreateItem;