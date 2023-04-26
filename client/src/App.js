import './App.css';
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {createContext} from "react";
import UserStore from './store/UserStore';
import {DeviceStore} from "./store/DeviceStore";

export const Context = createContext()

function App() {
    return (
        <Context.Provider value={
            {
                devices: new DeviceStore(),
                user: new UserStore()
            }
        }>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
