import { createStore } from "easy-peasy";
import { StoreModel } from "./types";
import { setPosts, addPost, setUsername } from "./actions";

const storeModel: StoreModel = {
  Posts: {
    Posts: [],
    setPosts: setPosts,
    addPost: addPost,
  },
  User: {
    username: null,
    setUsername: setUsername,
  }
};

const store = createStore(storeModel);
export default store;
