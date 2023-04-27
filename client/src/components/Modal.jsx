import React from 'react';
import Button from "./button/Button";

const Modal = ({show, onHide, children}) => {
    return (
        <div className={show ? '' +
            'w-screen h-screen absolute' : 'hidden'}>
            <div className={'bg-blue-50/90 w-screen h-screen absolute'} onClick={onHide}/>
            <div className={'flex justify-center mt-36'}>
                <div className={'text-center z-10 absolute bg-white/50 rounded-2xl p-10'}>
                    <div className={'flex flex-col m-8'}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;