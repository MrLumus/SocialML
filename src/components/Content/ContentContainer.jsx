import { connect } from "react-redux/es/exports";
import Content from "./Content";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const ContentContainer = connect(mapStateToProps)(Content);

export default ContentContainer;
