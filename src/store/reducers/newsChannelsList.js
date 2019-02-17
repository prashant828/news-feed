let initialNewsList = {
    newsChannelsList: []
};

const reducer = (state = initialNewsList, action) => {
    switch (action.type) {
        case 'STORE_NEWS_CHANNELS_LIST':
            return {
                ...state,
                newsChannelsList: action.payload.channels
            }
    }
    return state;
};

export default reducer;
