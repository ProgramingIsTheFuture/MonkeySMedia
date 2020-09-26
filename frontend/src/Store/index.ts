import { createStore } from "easy-peasy";
import { StoreModel } from "./types";
import { setPosts, addPost, setUsername, removePost } from "./actions";

const storeModel: StoreModel = {
  Posts: {
    Posts: [],
    setPosts: setPosts,
    addPost: addPost,
    removePost: removePost,
  },
  User: {
    username: null,
    setUsername: setUsername,
  }
};

const store = createStore(storeModel);
export default store;
