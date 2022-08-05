import { connect } from "react-redux/es/exports"
import Dialogs from "./Dialogs";

let mapStateToProps = (state) =>{
  return {
    resenders: state.dialogsPage.resenders,
    messages: state.dialogsPage.messages
  }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
