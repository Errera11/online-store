import React from 'react';
import loader from '../../assets/loader.gif';

const Loader = () => {
    return (
        <div className={'w-screen h-screen relative'}>
            <div className={'absolute top-1/2 left-1/2'}>
                <img src={loader} />
            </div>
        </div>
    );
};

export default Loader;