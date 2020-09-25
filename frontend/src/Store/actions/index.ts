import { action } from "easy-peasy";

export const setPosts = action((state: any, payload) => {
  state.Posts = payload;
});

export const addPost = action((state: any, payload) => {
  state.Posts.unshift(payload);
});

export const setUsername = action((state: any, payload) => {
  state.username = payload;
});