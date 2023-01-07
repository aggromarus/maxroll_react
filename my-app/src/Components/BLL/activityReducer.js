const addPost = 'ADD-POST';
const updateNewPost = 'UPDATE-NEW-POST-TEXT'

const activityReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newComment = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newComment);
            state.newPostText = '';
            return state;
        case updateNewPost:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: addPost});
export const updatePostActionCreator = (text) => {
    return {type: updateNewPost, newText: text}
}

export default activityReducer;