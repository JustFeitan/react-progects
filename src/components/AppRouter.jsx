import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Layout from "./Layout";
import Home from "../pages/Home";
import EditPost from '../pages/EditPost'
import Login from "../pages/Login";
import RequireAuth from "./hoc/RequireAuth";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home />}/>
                <Route path='about' element={<About />}/>
                <Route path='about-us' element={<Navigate to='/about' replace/>}/>
                <Route path='posts' element={<Posts />}/>
                <Route path='posts/:id' element={<PostIdPage />}/>
                <Route path='posts/:id/edit' element={
                    <RequireAuth>
                        <EditPost />
                    </RequireAuth>
                }/>
                <Route path='login' element={<Login />}/>
                <Route path='*' element={<Error />}/>
            </Route>

        </Routes>
    );
};

export default AppRouter;
