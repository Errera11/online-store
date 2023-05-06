import React, {useState} from 'react';
import Button from "../button/Button";
import Modal from "../Modal";
import {postType} from '../../http/itemApi'

const CreateType = ({onHide, show}) => {
    const [name, setName] = useState('')
    const create = () => {
        postType({name}).then(data => onHide());
    }
    return (
        <Modal onHide={onHide} show={show}>
            <div className={'mb-8'}>Create Type</div>
            <input className={'p-2 m-4 rounded-2xl'}
                   placeholder={'Type name'}
                   value={name}
                   onChange={e => setName(e.target.value)}/>
            <Button onClick={create}>Create type</Button>
        </Modal>
    );
};

export default CreateType;