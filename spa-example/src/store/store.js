import { createStore } from "redux";
import { postsReducer } from "./reducer";

export const store = createStore(postsReducer);

// GET_POSTS
// my store will give me data

// SET_POSTS + data
// store should create new post using that data

// DELETE_POST + id
// store should delete the post having that id
