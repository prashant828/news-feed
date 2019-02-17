let initialState = {
    newsList: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_NEWS':
            return {
                ...state,
                newsList: state.newsList.concat(action.payload)
            }
    }
    return initialState
};

export default reducer;
