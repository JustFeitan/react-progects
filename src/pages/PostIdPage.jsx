import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import Comment from "../components/UI/comment/comment";

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
    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id)
    }, [])


    return (
        <div>
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
