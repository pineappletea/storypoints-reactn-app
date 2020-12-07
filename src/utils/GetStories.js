import {storeStories} from '../redux/redux-functions'
import store from '../redux/store'

export default async function GetStories() {
    const state = store.getState()
    const location = state.userLocation

    const url = 'https://storypoints-api.herokuapp.com/around/' + location.lat + '/' + location.long

    await fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Getting stories failed');
            }
        })
        .then(data => {
            //console.log(data)
            storeStories(data)
        })
        .catch(error => console.error(error));
}