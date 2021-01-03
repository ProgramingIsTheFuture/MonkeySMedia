import { action } from "easy-peasy";
import { PostType } from "../types";

export const setPosts = action((state: any, payload) => {
  state.Posts = Array.from(new Set([...state.Posts, ...payload]));
});

export const addPost = action((state: any, payload) => {
  state.Posts.unshift(payload);
});

export const removePost = action((state: any, payload: number) => {
  state.Posts.filter((item: PostType, index: number) =>
    item.id === payload ? state.Posts.splice(index, index + 1) : null
  );
});

export const setUsername = action((state: any, payload) => {
  state.username = payload;
});

export const getProfileInfo = action((state: any, payload) => {
  state.ProfileInfo = payload;
});

export const remOrAddFollow = action((state: any, payload) => {
  state.ProfileInfo.followers = payload;
});

export const openModal = action((state: any) => {
  state.modal = true;
});

export const closeModal = action((state: any) => {
  state.modal = false;
});
