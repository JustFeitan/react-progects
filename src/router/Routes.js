import Posts from "../pages/Posts";
import Layout from "../components/Layout";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";


export const routes = [
    {path: '/about', element: About, index: true},
    {path: '/posts', element: Posts, index: false},
    {path: '/posts/:id', element: PostIdPage, index: false}
]


