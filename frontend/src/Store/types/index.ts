import { Action } from "easy-peasy";

export interface PostType {
  id: number;
  user: string;
  title?: string;
  content?: string;
  image?: string;
  profile_image: string;
  likes: number;
  timestamp: string;
}

interface User {
  username: string | null;
}

export interface ProfileInfoTypes {
  id: number;
  user: string;
  first_name: string;
  last_name: string;
  profile_image: string;
  background_profile_image: string;
  description: string;
  following: number;
  followers: number;
}

export interface StoreModel {
  Posts: {
    Posts: PostType[];
    setPosts: Action<{}, PostType[]>;
    addPost: Action<{}, PostType>;
    removePost: Action<{}, number>;
  };
  User: {
    username: string | null;
    setUsername: Action<{}, User>;
  };
  Profile: {
    ProfileInfo: ProfileInfoTypes;
    getProfileInfo: Action<{}, ProfileInfoTypes>;
    remOrAddFollow: Action<{}, number>;
  };
  Modal: {
    modal: boolean;
    openModal: Action<{}>;
    closeModal: Action<{}>;
  };
}
