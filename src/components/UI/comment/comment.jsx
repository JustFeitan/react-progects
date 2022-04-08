import React from 'react';
import classes from './comment.module.css'
const Comment = ({comments}) => {
    return (
        <div className={classes.comments}>
            <h2>Комментарии</h2>
            {comments.map((c) =>
                <div className={classes.comments__wrapper}>
                    <h3 key={c.id}>{c.name}</h3>
                    <p>{c.body}</p>
                </div>

            )}
        </div>
    );
};

export default Comment;
