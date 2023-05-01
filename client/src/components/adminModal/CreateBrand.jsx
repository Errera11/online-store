import React, {useState} from 'react';
import Button from "../button/Button";
import Modal from "../Modal";

const CreateBrand = ({onHide, show}) => {
    const [name, setName] = useState('')
    return (
        <Modal onHide={onHide} show={show}>
            <div className={'mb-8'}>Create Brand</div>
            <input className={'p-2 m-4 rounded-2xl'}
                   placeholder={'Brand name'}
                   value={name}
                   onChange={e => setName(e.target.value)}/>
            <Button>Create brand</Button>
        </Modal>
    );
};

export default CreateBrand;