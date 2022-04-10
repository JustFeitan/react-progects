import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import Comment from "../components/UI/comment/comment";
import MyButton from "../components/UI/button/MyButton";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isCommentsLoading, commentError] = useFetching( async (id) => {
        const response = await PostService.getCommentByPostId(id)
        setComments(response.data)
    })

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id)
    }, [])


    return (
        <div>
            <div>
                <MyButton onClick={goBack}>Назад</MyButton>
                <MyButton onClick={() => navigate(`/posts/${params.id}/edit`)}>Изменить</MyButton>
            </div>


            {isLoading
                ? <Loader/>
                : <div>
                    <h1>{post.id}. {post.title}</h1>
                    <p>{post.body}</p>
                </div>
            }
            {isCommentsLoading
                ? <Loader/>
                : <Comment comments={comments}/>
            }

        </div>
    );
};

export default PostIdPage;
