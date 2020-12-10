import {
  UPDATE_USERNAME,
  UPDATE_AUTHENTICATION,
  UPDATE_PROFILE,
  // CHANGE_SEARCH_FIELD,
  // REQUEST_ROBOTS_PENDING,
  // REQUEST_ROBOTS_SUCCESS,
  // REQUEST_ROBOTS_FAILED
} from "./Constants";
const initialUsername = {
  username: "",
};
const initialAuth = {
  authenticated: false,
};
const initialProfile = {
  firstname: "",
  lastname: "",
  bio: "",
  mobile: "",
  image: "",
  pin: "",
  city: "",
  address: "",
};
export const updateUsername = (state = initialUsername, action = {}) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return Object.assign({}, state, { username: action.payload });
    default:
      return state;
  }
};
export const updateProfile = (state = initialProfile, action = {}) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return Object.assign({}, state, {
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        bio: action.payload.bio,
        mobile: action.payload.mobile,
        image: action.payload.image,
        pin: action.payload.pin,
        city: action.payload.city,
        address: action.payload.address,
      });
    default:
      return state;
  }
};
export const updateAuthentication = (state = initialAuth, action = {}) => {
  switch (action.type) {
    case UPDATE_AUTHENTICATION:
      return Object.assign({}, state, { authenticated: action.payload });
    default:
      return state;
  }
};

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
