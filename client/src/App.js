import './App.css';
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {checkToken} from "./http/userAPI";
import {Context} from "./index";
import Loader from "./components/loader/Loader";



function App() {

    const {user} = useContext(Context);
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        try {
            async function fetchData() {
                const responseUser  = await checkToken();
                user.user = responseUser
                user.isAuth = true;
            }
            fetchData()
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }, [])

    if (isLoading) return <Loader />

    return (
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
    );
}

export default App;
