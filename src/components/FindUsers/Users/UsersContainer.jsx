import { connect } from "react-redux";
import { addUsersActionCreator, followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../../redux/findUsersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (userId) => {
      dispatch(followActionCreator(userId))
    },
    onUnfollow: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
    addUsers: (users) => {
      dispatch(addUsersActionCreator(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
