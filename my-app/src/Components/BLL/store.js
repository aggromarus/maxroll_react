import activityReducer from "./activityReducer";


const store = {
    _state: {
        communityActivity: {
            posts: [
                {id: 1, message: 'Some message', likesCount: 0},
                {id: 2, message: 'Some message2', likesCount: 2},
                {id: 3, message: 'Some message3', likesCount: 3},
                {id: 4, message: 'Some message4', likesCount: 4}
            ],
            newPostText: 'test text'
        },
        contentList: {
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
            ]
        },
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
        this._state.communityActivity = activityReducer(this._state.communityActivity, action) //reducer activity of state
        this._renderTree(this._state);
    }
}

export default store