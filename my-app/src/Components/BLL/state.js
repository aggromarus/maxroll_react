import {renderTree} from "../../render";

let state = {
    game: [
        {id: 1, name: 'd2', title: 'Diablo II', img: 'https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs'},
        {id: 2, name: 'd3', title: 'Diablo III', img: 'https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs'},
        {id: 3, name: 'Poe', title: 'Path of Exile', img: 'https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs'},
    ],
    posts: [
        {id: 1, message: 'Some message', likesCount: 0},
        {id: 2, message: 'Some message2', likesCount: 2},
        {id: 3, message: 'Some message3', likesCount: 3},
        {id: 4, message: 'Some message4', likesCount: 4}
    ],
    newPostText: ''
}

export let addPost = (addComment) => {
    let newComment = {
        id: 5,
        message: addComment,
        likesCount: 0
    };
    state.posts.push(newComment);
    renderTree(state)
}

export let updateNewPostText = (newText) => {
    state.newPostText = newText;
    renderTree(state);
}


export default state