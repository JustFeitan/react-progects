import React, {useEffect, useState} from 'react';
import '../styles/app.css';
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../components/utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] =useState(10);
    const [page, setPage] =useState(1);
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)


    const  [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(limit, totalCount));

    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className='App'>
            <MyButton style={{marginTop: '15px'}}  onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style= {{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Ошибка ${postError}</h1>
            }
            {isPostLoading
                ? <Loader/>
                : <PostList posts={sortedAndSearchPosts} title={"Список постов 1"} deleteP={deletePost}/>
            }
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}/>

        </div>

    );
}

export default Posts;
