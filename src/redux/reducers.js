let initialState = {
    stories: [],
    newStory:[],
    // Hardcoded location to start
    userLocation: {lat: 60.20157127986968, long: 24.934423183549658}

}



function reducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_STORIES': 
        return Object.assign({}, state,
            {stories: action.stories}
            )


        default:
            return initialState
    }

}

export default reducer