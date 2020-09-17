import { createStore, Action } from "easy-peasy";
import { PostType } from "./types";
import { setPosts, addPost } from "./actions";

interface StoreModel {
  Posts: {
    Posts: PostType[];
    setPosts: Action<{}, PostType[]>;
    addPost: Action<{}, PostType>;
  };
}

const storeModel: StoreModel = {
  Posts: {
    Posts: [],
    setPosts: setPosts,
    addPost: addPost,
  },
};

const store = createStore(storeModel);
export default store;
