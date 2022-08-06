const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
      ]
  };

const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }


    default:
      return state;
  }
  
}

export const followActionCreator = (userID) => {
  return {
    type: FOLLOW,
    userID: userID
  }
}
export const unfollowActionCreator = (userID) => {
  return {
    type: UNFOLLOW,
    userID: userID
  }
}
export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users: users
  }
}

export default findUsersReducer; 