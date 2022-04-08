import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, deleteP}) => {

    if (!posts.length) {
        return (<h1 style={{textAlign: "center"}}>
            Посты не были найдены
        </h1> )
    }

    return (
        <div>
              <h1 style={{textAlign: "center"}}>
                    {title}
                </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <Post number={index + 1} post={post}  deleteP={deleteP}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;
