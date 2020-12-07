let initialState = {
    stories: [],
    newStory: [],
    // Hardcoded location to start
    userLocation: { lat: 60.20157127986968, long: 24.934423183549658 },
    modalFormVisible: false
}



function reducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_STORIES':
            return Object.assign({}, state,
                { stories: action.stories })

        case 'SET_USER_LOCATION':
            return Object.assign({}, state,
                { userLocation: action.userLocation })
        case 'SET_FORM_MODAL_VISIBILITY':
            return Object.assign({}, state,
                { modalFormVisible: action.modalFormVisible })
        case 'ADD_STORY':
            return Object.assign({}, state,
                { stories: [...state.stories, action.newStory]})
                

        default:
            return initialState
    }

}

export default reducer