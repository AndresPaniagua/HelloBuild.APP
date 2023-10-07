import { SAVE_USER, IS_LOOGED, SHOW_LIST, TOKEN, REPOSITORY_LIST, FAV_REPOSITORY_LIST, GIT_LOGIN } from "../types";

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const changeLog = (payload) => ({
  type: IS_LOOGED,
  payload,
});

export const showList = (payload) => ({
  type: SHOW_LIST,
  payload,
});

export const saveToken = (payload) => ({
  type: TOKEN,
  payload,
});

export const reposList = (payload) => ({
  type: REPOSITORY_LIST,
  payload,
});

export const favReposList = (payload) => ({
  type: FAV_REPOSITORY_LIST,
  payload,
});

export const changeGitLogin = (payload) => ({
  type: GIT_LOGIN,
  payload,
});
