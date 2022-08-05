import { newPostActionCreator, postTextChangeActionCreator } from "../../../redux/profileReducer";
import { connect } from "react-redux/es/exports";
import PostCreate from "./PostCreate";

let mapStateToProps = (state) => {
  return{
    postText: state.profilePage.postText
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    postTextChange: (text) => {
      dispatch(postTextChangeActionCreator(text));
    },
    newPost: () => {
      dispatch(newPostActionCreator())
    }
  }
}
//
const PostCreateContainer = connect(mapStateToProps, mapDispatchToProps)(PostCreate);

export default PostCreateContainer;