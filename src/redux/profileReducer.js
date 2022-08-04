const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

let initialState = {
  postText: "",
  posts: [
    { id: 1, message: "Hi, how are you?", likes: 10 },
    { id: 2, message: "I already know HTML / CSS / JS very well", likes: 2 },
    { id: 3, message: "I'm learning React", likes: 52 },
    { id: 4, message: "I will learn Redux", likes: 0 },
  ],
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_POST:
        let posts = state.posts;
        const id = posts[posts.length - 1].id + 1;
        const post = {
          id: id,
          message: state.postText,
          likes: 0,
        };

        posts.push(post);
        state.postText = "";
        return state;

      case CHANGE_POST_TEXT:
        state.postText = action.newPostText;
        return state;

      default:
        return state;
    }
}

export const newPostActionCreator = () => ({
  type: ADD_POST,
});
export const postTextChangeActionCreator = (newText) => ({
  type: CHANGE_POST_TEXT,
  newPostText: newText,
});

export default profileReducer;