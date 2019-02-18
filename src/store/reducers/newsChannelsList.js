let initialNewsList = {
    newsChannelsList: [],
    toggle: true
};

const reducer = (state = initialNewsList, action) => {
    switch (action.type) {
        case 'STORE_NEWS_CHANNELS_LIST':
            return {
                ...state,
                newsChannelsList: action.payload.channels
            };
        case 'SORT_BY_NAME':
            let updateArray = [...state.newsChannelsList];
            if(state.toggle){
                updateArray.sort((a,b)=>{
                    if(a.name>b.name){
                        return -1
                    }
                    if(a.name<b.name){
                        return 1
                    }
                    else {
                        return 0
                    }
                });
            }
            if(!state.toggle) {
                updateArray.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                    else {
                        return 0
                    }
                });
            }
            updateArray.pop();
            return {
                ...state,
                newsChannelsList: updateArray,
                toggle: !state.toggle
            }
    }
    return state;
};

export default reducer;
