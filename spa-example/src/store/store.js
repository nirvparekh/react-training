import { createStore, combineReducers } from "redux";
import { postsReducer } from "./postReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  authRed: authReducer,
});

export const app_store = createStore(rootReducer);

// GET_POSTS
// my store will give me data

// SET_POSTS + data
// store should create new post using that data

// DELETE_POST + id
// store should delete the post having that id
