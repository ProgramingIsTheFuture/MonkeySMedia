import { Action } from "easy-peasy";

export interface PostType {
  id: number;
  user: string;
  title?: string;
  content?: string;
  image?: string;
  likes: number;
  timestamp: string;
}

interface User {
  username: string | null;
}

export interface StoreModel {
  Posts: {
    Posts: PostType[];
    setPosts: Action<{}, PostType[]>;
    addPost: Action<{}, PostType>;
  };
  User: {
    username: string | null;
    setUsername: Action<{}, User>;
  };
}
