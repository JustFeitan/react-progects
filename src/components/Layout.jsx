import React from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <main className='App'>
                <Outlet/>
            </main>
        </>



    );
};

export default Layout;
