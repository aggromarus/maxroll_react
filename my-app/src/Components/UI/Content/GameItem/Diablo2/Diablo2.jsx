import React from "react";
import Post from "../Comments/Post";
import style from '../Comments/Post.module.css'

const Diablo2 = (props) => {
    let renderComment = props.state.posts.map((post) => {
        return <Post message={post.message}/>
    })
    let newComment = React.createRef();
    let addComment = () => {
        let text = newComment.current.value;
        props.dispatch( {type: 'ADD-POST'});
    }

    let onChange = () => {
        let text = newComment.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }
    return (
        <div>
            <h3>{props.state.game[0].title}</h3>
            <textarea onChange={onChange}
                      ref={newComment}
                      value={props.state.newPostText}

            />
            <button onClick={addComment}>Add message</button>
            <div className={style.comments}>
                {renderComment}
            </div>
        </div>
    );
};

export default Diablo2;