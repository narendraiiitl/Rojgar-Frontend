import {
    UPDATE_USERNAME
    // CHANGE_SEARCH_FIELD,
    // REQUEST_ROBOTS_PENDING,
    // REQUEST_ROBOTS_SUCCESS,
    // REQUEST_ROBOTS_FAILED
} from './constants.js'
const initialUsername = {
    username: ''
}
export const updateUsername = (state = initialUsername, action = {}) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, { username: action.payload })
        default:
            return state;
    }
}

// const initialStateRobots = {
//     robots: [],
//     isPending: false,
//     error: ''
// }

// export const requestRobots = (state = initialStateRobots, action = {}) => {
//     switch (action.type) {
//         case REQUEST_ROBOTS_PENDING:
//             return Object.assign({}, state, { isPending: true })
//         case REQUEST_ROBOTS_SUCCESS:
//             return Object.assign({}, state, { robots: action.payload, isPending: false })
//         case REQUEST_ROBOTS_FAILED:
//             return Object.assign({}, state, { error: action.payload, isPending: false })
//         default:
//             return state;
//     }
// }