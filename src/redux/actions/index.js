import { SAVE_USER, IS_LOOGED } from "../types";

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const changeLog = (payload) => ({
  type: IS_LOOGED,
  payload,
});
