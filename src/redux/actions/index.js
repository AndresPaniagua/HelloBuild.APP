import {
  SAVE_USER,
  IS_LOOGED,
  SHOW_LIST,
  TOKEN,
  REPOSITORY_LIST,
  FAV_REPOSITORY_LIST,
  GIT_LOGIN,
  SHOW_PROFILE,
  MY_SELECTED_REPOS_LIST,
  SHOW_SELECTED,
} from "../types";

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

export const showProfile = (payload) => ({
  type: SHOW_PROFILE,
  payload,
});

export const showSelected = (payload) => ({
  type: SHOW_SELECTED,
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

export const mySelectedReposList = (payload) => ({
  type: MY_SELECTED_REPOS_LIST,
  payload,
});

export const changeGitLogin = (payload) => ({
  type: GIT_LOGIN,
  payload,
});
