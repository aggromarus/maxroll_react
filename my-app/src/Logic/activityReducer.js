const addPost = 'ADD-POST';
const updateNewPost = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Some message', likesCount: 0},
        {id: 2, message: 'Some message2', likesCount: 2},
        {id: 3, message: 'Some message3', likesCount: 3},
        {id: 4, message: 'Some message4', likesCount: 4}
    ],
    newPostText: 'test text'
};
const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let newComment = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newComment);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case updateNewPost:
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: addPost});
export const updatePostActionCreator = (text) => {
    return {type: updateNewPost, newText: text}
}

export default activityReducer;