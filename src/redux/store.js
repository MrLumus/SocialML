import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Ivan B.",
          photoUrl:
            "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg",
        },
        {
          id: 2,
          name: "Kseniya Kh.",
          photoUrl:
            "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg",
        },
        {
          id: 3,
          name: "Andrey K.",
          photoUrl:
            "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg",
        },
        {
          id: 4,
          name: "Ivan R.",
          photoUrl:
            "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg",
        },
        {
          id: 5,
          name: "Sergey P.",
          photoUrl:
            "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg",
        },
        {
          id: 6,
          name: "Yuri K.",
          photoUrl:
            "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg",
        },
      ],
    },
    profilePage: {
      postText: "",
      posts: [
        { id: 1, message: "Hi, how are you?", likes: 10 },
        { id: 2, message: "I already know HTML / CSS / JS very well", likes: 2 },
        { id: 3, message: "I'm learning React", likes: 52 },
        { id: 4, message: "I will learn Redux", likes: 0 },
      ],
    },
    dialogsPage: {
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
    },
  },
  _subscriber() {
    console.log("no observers");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._subscriber(this._state);
  }
};

export default store;