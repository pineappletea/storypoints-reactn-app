import store from './store'
import {setStories, setLocation, setFormModalVisibility, addNewStory} from './actions'


export function storeStories(stories) {
    store.dispatch(setStories(stories))
}

export function storeLocation(location) {
    store.dispatch(setLocation(location))
}

export function hideModal() {
    store.dispatch(setFormModalVisibility(false))
}

export function openModal() {
    store.dispatch(setFormModalVisibility(true))
}

export function addStory(story) {
    store.dispatch(addNewStory(story))
}