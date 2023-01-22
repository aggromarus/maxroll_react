import React from 'react';
import style from "./Post.module.css";
import Post from "./Post";

const Comments = (props) => {
    let renderComment = props.activity.posts.map((post) => {
        return <Post message={post.message}/>
    })
    let newComment = React.createRef();
    let addComment = () => {
        props.addComment();
    }
    let onChange = () => {
        let text = newComment.current.value;
        props.updateMessage(text);
    }
        return <div className={style.wrapper}>
            <h3>{props.content.game[0].title}</h3>
            <textarea onChange={onChange}
                      ref={newComment}
                      value={props.activity.newPostText}/>
            <button onClick={addComment}>Add message</button>
            <div className={style.comments}>
                {renderComment}
            </div>
        </div>
    };

    export default Comments;