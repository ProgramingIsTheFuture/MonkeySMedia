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

export interface ProfileInfo {
  user: string;
  profile_image: string;
  background_profile_image: string;
  description: string;
  following: number;
  followers: number;
  timestamp: string;
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
    ProfileInfo: ProfileInfo;
    getProfileInfo: Action<{}, ProfileInfo>;
  };
}
