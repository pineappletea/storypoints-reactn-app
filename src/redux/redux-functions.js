import store from './store'
import {setStories} from './actions'


export function storeStories(stories) {
    store.dispatch(setStories(stories))
}