import React from "react";
const Diablo2 = (props) => {
    let newComment = React.createRef();
    let addComment = () => {
        let text = newComment.current.value;
        console.log(text)
    }
    return (
        <div>
            <h3>{props.state.game[0].title}</h3>
            <textarea ref={newComment}/>
            <button onClick=
                        {addComment}>Add message
            </button>
        </div>
    );
};

export default Diablo2;