import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import PostList from "./PostList";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <form>
                {/*Управляемый компонент*/}
                <MyInput
                    onChange={e => setPost({...post, title: e.target.value})}
                    value={post.title}
                    type='text'
                    placeholder='Название поста'
                />
                {/*Неуправляемый\неконтролируемый компонент*/}
                <MyInput
                    onChange={e => setPost({...post, body: e.target.value})}
                    value={post.body}
                    type='text'
                    placeholder='Описание поста'
                />


                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>

    );
};

export default PostForm;
