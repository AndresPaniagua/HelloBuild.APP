import { SAVE_USER, IS_LOOGED, SHOW_LIST, TOKEN } from "../types";

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
