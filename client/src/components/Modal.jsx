import React from 'react';
import Button from "./button/Button";

const Modal = ({show, onHide, children}) => {
    return (
        <div className={show ? '' +
            'w-screen mb-4 absolute duration-1000' : 'hidden'}>
            <div className={'fixed bg-blue-50/90 w-screen h-screen'} onClick={onHide}/>
            <div className={'flex justify-center m-auto'}>
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