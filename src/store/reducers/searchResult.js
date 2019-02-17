let initialState = {
    searchResult: []
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'STORE_SEARCH_RESULT':
            return {
                ...state,
                searchResult: action.payload
            }

    }
return state
}
export default reducer;
