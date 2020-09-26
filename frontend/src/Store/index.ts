import { createStore } from "easy-peasy";
import { StoreModel } from "./types";
import { setPosts, addPost, setUsername, removePost, getProfileInfo } from "./actions";

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
  },
  Profile: {
    ProfileInfo: {
      description: '',
      profile_image: '',
      timestamp: '',
      user: '',
    },
    getProfileInfo: getProfileInfo
  }
};

const store = createStore(storeModel);
export default store;
