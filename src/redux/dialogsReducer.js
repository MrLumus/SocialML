const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  resenders: [
    { id: 1, name: "Ivan B." },
    { id: 2, name: "Kseniya Kh." },
    { id: 3, name: "Andrey K." },
    { id: 4, name: "Ivan R." },
    { id: 5, name: "Sergey P." },
    { id: 6, name: "Yuri K." },
  ],
  messages: [
    {
      id: 1,
      from: "Me",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
    {
      id: 2,
      from: "Ivan B.",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
    {
      id: 3,
      from: "Me",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
    {
      id: 4,
      from: "Ivan B.",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
    {
      id: 5,
      from: "Ivan B.",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
    {
      id: 6,
      from: "Me",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
    {
      id: 7,
      from: "Me",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
    {
      id: 8,
      from: "Ivan B.",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
    {
      id: 9,
      from: "Me",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
    {
      id: 10,
      from: "Ivan B.",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
    {
      id: 11,
      from: "Ivan B.",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
    {
      id: 12,
      from: "Me",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.",
    },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_MESSAGE_TEXT:{
      let newState = { ...state };
      newState.newMessageText = action.newMessageText;
      return newState;
    }
      

    case ADD_MESSAGE:{
      let newState = { ...state };
      newState.messages = [...state.messages];

      let messages = newState.messages;
      const id = messages[messages.length - 1].id + 1;
      const message = { id: id, from: "Me", message: newState.newMessageText };
      messages.push(message);
      newState.newMessageText = "";
      return newState;
    }
      

    default:
      return state;
  }
}

export const messageTextChangeActionCreator = (newText) => ({
  type: CHANGE_MESSAGE_TEXT,
  newMessageText: newText,
});
export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export default dialogsReducer;