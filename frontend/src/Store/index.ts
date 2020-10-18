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
      user: '',
      first_name: '',
      last_name: '',
      profile_image: '',
      background_profile_image: '',
      description: '',
      following: 0,
      followers: 0,
      timestamp: '',
    },
    getProfileInfo: getProfileInfo
  }
};

const store = createStore(storeModel);
export default store;
