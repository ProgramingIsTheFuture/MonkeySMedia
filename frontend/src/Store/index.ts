import { createStore, Action, action } from "easy-peasy";
import { Post } from "./types";
import {setPosts, addPost} from "./actions";

interface StoreModel {
  Posts: {
    Posts: Post[];
    setPosts: Action<{}, Post[]>;
    addPost: Action<{}, Post>;
  };
}

const storeModel: StoreModel = {
  Posts: {
    Posts: [],
    setPosts: setPosts,
    addPost: addPost
  },
};

const store = createStore(storeModel);
export default store;
