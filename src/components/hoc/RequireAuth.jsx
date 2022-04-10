import React, {useContext} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../../context";

const RequireAuth = ({children}) => {
    const location = useLocation()
    const {isAuth, setIsAuth} = useContext(AuthContext)

    if(!isAuth) {
        return <Navigate to='/login' state={{from: location}}/>
    }
    return children;
};

export default RequireAuth;
