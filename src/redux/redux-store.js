import {combineReducers, legacy_createStore as createStore} from 'redux'; 
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import findUsersReducer from './findUsersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    findUsersPage: findUsersReducer
});

let store = createStore(reducers);
export default store;