import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {DeviceStore} from "./store/DeviceStore";
import UserStore from "./store/UserStore";
import CartStore from "./store/CartStore";

export const Context = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={
        {
            devices: new DeviceStore(),
            user: new UserStore(),
            cart: new CartStore()
        }
    }>
        <App/>
    </Context.Provider>
);


