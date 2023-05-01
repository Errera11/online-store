import React, {useState} from 'react';
import Button from "../button/Button";
import Modal from "../Modal";

const CreateType = ({onHide, show}) => {
    const [name, setName] = useState('')
    return (
        <Modal onHide={onHide} show={show}>
            <div className={'mb-8'}>Create Type</div>
            <input className={'p-2 m-4 rounded-2xl'}
                   placeholder={'Type name'}
                   value={name}
                   onChange={e => setName(e.target.value)}/>
            <Button>Create type</Button>
        </Modal>
    );
};

export default CreateType;