let initialState = {
    newsList: [],
    toggle: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_NEWS':
            return {
                ...state,
                newsList: state.newsList.concat(action.payload)
            };
        case 'SORT':
            let sourceIndex = state.newsList.findIndex(news => news.source === action.payload.id);
            let updateArray = [...state.newsList[sourceIndex].articles];
            if(state.toggle){
                updateArray.sort((a,b)=>{
                    if(a.title > b.title){
                        return 1
                    }
                    if(a.title < b.title){
                        return -1
                    }else{
                        return 0
                    }
                });
            }
            if(!state.toggle){
                updateArray.sort((a,b)=>{
                    if(a.title > b.title){
                        return -1
                    }
                    if(a.title < b.title){
                        return 1
                    }else{
                        return 0
                    }
                });
            }
            state.newsList[sourceIndex].articles = updateArray;

            return {
                ...state,
                newsList: [
                    ...state.newsList.slice(0, sourceIndex),
                    state.newsList[sourceIndex],
                    ...state.newsList.slice(sourceIndex+1)
                ],
                toggle: !state.toggle
            };
    }
    return state
};

export default reducer;
