import { storeStories } from '../redux/redux-functions'
import store from '../redux/store'
import { addStory } from '../redux/redux-functions'

export default function PostStory(title, description, storyText) {
    const state = store.getState()

    const url = 'https://storypoints-api.herokuapp.com/stories/post/1'
    const newStory = {
        StoryTitle: title,
        LocationDescription: description,
        StoryText: storyText,
        Coordinates: state.userLocation
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newStory)
    })
        .then(response => {
            console.log(JSON.stringify(response))
        })
        .catch(err => {
            console.log(err)
        })

    // For development phase, we cheat the user a little bit here: 
    // The backend does receive the story-object and logs it, but there is no database.
    // Add story to local list of stories.

    console.log('adding to stories: ', newStory)
    addStory(newStory)
}