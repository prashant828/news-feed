let initialState = {
    newsList: []
};

const reducer = (state = initialState, action) => {
    if(action.type === 'STORE_NEWS'){
        return {
            ...state,
            newsList: state.newsList.concat(action.payload)
        }
    }
    return initialState
};

export default reducer;
