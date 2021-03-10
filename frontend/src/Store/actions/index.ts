import { action } from "easy-peasy";
import { PostType, PayloadNextPage } from "../types";

export const setPosts = action((state: any, payload: PayloadNextPage) => {
  if (payload.page < state.page) {
    state.Posts = payload.posts;
  } else if (payload.page > state.page) {
    state.Posts = Array.from(new Set([...state.Posts, ...payload.posts]));
  } else {
    state.Posts = payload.posts;
  }
});

export const setPage = action((state: any, payload: number) => {
  state.page = payload;
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
