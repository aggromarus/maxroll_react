import React from 'react';

const Post = (props) => {
    return (
        <div>
            <p>{props.id}</p>
            <h3>{props.message}</h3>
            <p>{props.likesCount}</p>
        </div>
    );
};

export default Post;