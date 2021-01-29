import { createStore } from "easy-peasy";
import { StoreModel } from "./types";
import {
  setPage,
  setPosts,
  addPost,
  setUsername,
  removePost,
  getProfileInfo,
  remOrAddFollow,
  closeModal,
  openModal,
} from "./actions";

const storeModel: StoreModel = {
  Posts: {
    Posts: [],
	page: 1,
	setPage: setPage,
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
      id: 0,
      user: "",
      first_name: "",
      last_name: "",
      profile_image: "",
      background_profile_image: "",
      description: "",
      following: 0,
      followers: 0,
    },
    getProfileInfo: getProfileInfo,
    remOrAddFollow: remOrAddFollow,
  },
  Modal: {
    modal: false,
    openModal: openModal,
    closeModal: closeModal,
  },
};

const store = createStore(storeModel);
export default store;
