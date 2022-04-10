import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import {useLocation, useNavigate} from "react-router";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(isAuth)
    const logout = () => {
        setIsAuth(false);
        localStorage.setItem('auth', 'false');
    }

    return (
        <nav>
            {isAuth
                ? <MyButton onClick={logout}>
                    Выйти
                </MyButton>
                : <MyButton onClick={() => navigate('/login', {state: {from: location}})}>
                    Войти
                </MyButton>
            }




            <ul className='navbar__links'>
                <li className='navbar__link'>
                    <Link  to='/'>Главная</Link>
                </li>
                <li className='navbar__link'>
                    <Link  to='about'>О сайте</Link>
                </li>
                <li className='navbar__link'>
                    <Link  to='/posts'>Посты</Link>
                </li>
            </ul>
        </nav>

    );
};

export default Navbar;
