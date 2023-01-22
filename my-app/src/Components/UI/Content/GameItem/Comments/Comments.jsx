import React from 'react';
import style from "./Post.module.css";
import {addPostActionCreator, updatePostActionCreator} from "../../../../BLL/activityReducer";
import Post from "./Post";

const Comments = (props) => {
    let renderComment = props.state.activity.posts.map((post) => {
        return <Post message={post.message}/>
    })
    let newComment = React.createRef();
    let addComment = () => {
        let text = newComment.current.value;
        props.dispatch(addPostActionCreator(text));
    }

    let onChange = () => {
        let text = newComment.current.value;
        let action = updatePostActionCreator(text)
        props.dispatch(action);
    }
        return <div className={style.wrapper}>
            <h3>{props.state.content.game[0].title}</h3>
            <textarea onChange={onChange}
                      ref={newComment}
                      value={props.state.activity.newPostText}/>
            <button onClick={addComment}>Add message</button>
            <div className={style.comments}>
                {renderComment}
            </div>
        </div>
    };

    export default Comments;