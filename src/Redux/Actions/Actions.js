import {
    // CHANGE_SEARCH_FIELD,
    // REQUEST_ROBOTS_PENDING,
    // REQUEST_ROBOTS_SUCCESS,
    // REQUEST_ROBOTS_FAILED
    UPDATE_USERNAME
} from '../Reducers/Constants'
export const setUsername = text => ({
    type: UPDATE_USERNAME,
    payload: text
})
// export const requestRobots = () => (dispatch) => {
//     dispatch({ type: REQUEST_ROBOTS_PENDING })
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//         .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
// }