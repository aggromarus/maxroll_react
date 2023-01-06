import React from "react";
import Post from "../Comments/Post";
import style from '../Comments/Post.module.css'

const Diablo2 = (props) => {
    let renderComment = props.state.posts.map((post) => {
        return <Post message={post.message}/>
    })
    let newComment = React.createRef();
    console.log(props)
    let addComment = () => {
        let text = newComment.current.value;
        props.addPost(text);
        newComment.current.value = ''
    }
    return (
        <div>
            <h3>{props.state.game[0].title}</h3>
            <textarea ref={newComment}/>
            <button onClick={addComment}>Add message
            </button>
            <div className={style.comments}>
                {renderComment}
            </div>
        </div>
    );
};

export default Diablo2;