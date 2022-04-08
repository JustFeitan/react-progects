import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul className='navbar__links'>
                <li className='navbar__link'>
                    <Link  to='/'>О сайте</Link>
                </li>
                <li className='navbar__link'>
                    <Link  to='/posts'>Посты</Link>
                </li>
            </ul>
        </nav>

    );
};

export default Navbar;
