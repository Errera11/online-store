import React, {useContext} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context);
    return (
        <>
            <Routes>
            {user.isAuth ? <>
                    {privateRoutes.map(({element, path}) => {
                        return <Route key={path} path={path} element={element} />
                    })}
            </>
            :
            <>
                {publicRoutes.map(({element, path}) => {
                    return <Route key={path} path={path} element={element} />
                })}
            </>}
                <Route path={'*'} element={<Navigate to="/" />}/>
            </Routes>
        </>
    );
});

export default AppRouter;