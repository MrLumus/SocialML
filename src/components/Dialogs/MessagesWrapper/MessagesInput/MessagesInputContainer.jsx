import { connect } from "react-redux/es/exports";
import { messageTextChangeActionCreator, addMessageActionCreator } from "../../../../redux/dialogsReducer";
import MessagesInput from "./MessagesInput";

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeMessageText: (messageText) => {
      dispatch(messageTextChangeActionCreator(messageText));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
}


const MessagesInputContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesInput);

export default MessagesInputContainer;
