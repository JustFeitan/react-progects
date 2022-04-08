import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <h1>
            Что то пошло не так
            <Link to='/posts'>Вернуться на главную</Link>
        </h1>
    );
};

export default Error;
