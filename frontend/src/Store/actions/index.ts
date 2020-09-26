import { action } from "easy-peasy";
import { PostType } from "../types";

export const setPosts = action((state: any, payload) => {
  state.Posts = payload;
});

export const addPost = action((state: any, payload) => {
  state.Posts.unshift(payload);
});

export const removePost = action((state: any, payload: number) => {
  state.Posts.filter((item: PostType, index: number) =>
    item.id === payload ? state.Posts.splice(index, index+1) : null
  );
});

export const setUsername = action((state: any, payload) => {
  state.username = payload;
});
