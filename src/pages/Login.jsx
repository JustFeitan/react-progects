import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location.state?.from?.pathname || '/';
    const login  = (event) => {
        event.preventDefault();
        setIsAuth(true);
        navigate(fromPage, {replace: true});
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Введите логин'/>
                <MyInput type="password" placeholder='Введите пароль'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;
