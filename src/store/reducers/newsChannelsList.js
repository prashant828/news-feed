let initialNewsList = {
    newsChannelsList: []
};

const reducer = (state = initialNewsList, action) => {
    switch (action.type) {
        case 'STORE_NEWS_CHANNELS_LIST':
            return {
                ...state,
                newsChannelsList: action.payload.channels
            };
        case 'SORT_BY_SOURCE':
            return {
                ...state,
                newsChannelsList: action.list,
            };
    }
    return state;
};

export default reducer;
