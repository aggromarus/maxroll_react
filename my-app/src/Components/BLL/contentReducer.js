let preLoadReducer = {
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
};

const contentReducer = (state = preLoadReducer, action) => {
    return state;
}


export default contentReducer;