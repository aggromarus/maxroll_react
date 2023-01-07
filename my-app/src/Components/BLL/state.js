const store = {
    _state: {
        game: [
            {
                id: 1,
                name: 'd2',
                title: 'Diablo II',
                img: 'https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs'
            },
            {
                id: 2,
                name: 'd3',
                title: 'Diablo III',
                img: 'https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs'
            },
            {
                id: 3,
                name: 'Poe',
                title: 'Path of Exile',
                img: 'https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs'
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

    /*
        addPost() {
            let newComment = {
                id: 5,
                message: this._state.newPostText,
                likesCount: 0
            };
            this._state.posts.push(newComment);
            this._renderTree(this._state)
        },
        updateNewPostText(newText) {
            this._state.newPostText = newText;
            this._renderTree(this._state);
        },
    */

    dispatch(action) { //action = { }
        if (action.type === 'ADD-POST') {
            let newComment = {
                id: 5,
                message: this._state.newPostText,
                likesCount: 0
            };
            this._state.posts.push(newComment);
            this._state.newPostText = '';
            this._renderTree(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.newPostText = action.newText;
            this._renderTree(this._state);
        }

    }
}

export default store