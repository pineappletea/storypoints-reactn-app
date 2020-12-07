export function setStories(stories) {
    return ({
        type: 'SET_STORIES',
        stories: stories
    })
}

export function setLocation(location) {
    return ({
        type: 'SET_USER_LOCATION',
        userLocation: location
    })
}

export function setFormModalVisibility(visibility) {
    return ({
        type: 'SET_FORM_MODAL_VISIBILITY',
        modalFormVisible: visibility
    })
}

export function addNewStory(story) {
    return ({
        type: 'ADD_STORY',
        newStory: story
    })
}