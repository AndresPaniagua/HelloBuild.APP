import { SAVE_USER } from "../types";

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});
