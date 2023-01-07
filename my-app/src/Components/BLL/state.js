const addPost = 'ADD-POST';
const updateNewPost = 'UPDATE-NEW-POST-TEXT'

const store = {
    _state: {
        game: [
            {
                id: 1,
                name: 'd2',
                title: 'Diablo II',
                img: 'https://assets.maxroll.gg/wp-content/assets/img/d2r-banner-240x320.jpg'
            },
            {
                id: 2,
                name: 'd3',
                title: 'Diablo III',
                img: 'https://assets.maxroll.gg/wp-content/assets/img/d3-banner-240x320.jpg'
            },
            {
                id: 3,
                name: 'Poe',
                title: 'Path of Exile',
                img: 'https://assets.maxroll.gg/wp-content/assets/img/poe-banner-240x320.jpg'
            },
        ],
        posts: [
            {id: 1, message: 'Some message', likesCount: 0},
            {id: 2, message: 'Some message2', likesCount: 2},
            {id: 3, message: 'Some message3', likesCount: 3},
            {id: 4, message: 'Some message4', likesCount: 4}
        ],
        newPostText: ''
    },
    _renderTree() {
        console.log('renderTree method')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._renderTree = observer;
    },

    dispatch(action) { //action = { }
        if (action.type === addPost) {
            let newComment = {
                id: 5,
                message: this._state.newPostText,
                likesCount: 0
            };
            this._state.posts.push(newComment);
            this._state.newPostText = '';
            this._renderTree(this._state)
        } else if (action.type === updateNewPost) {
            this._state.newPostText = action.newText;
            this._renderTree(this._state);
        }

    }
}
export const addPostActionCreator = () => ({type:addPost});
export const updatePostActionCreator = (text) => {
    return { type: updateNewPost, newText: text}
}
export default store