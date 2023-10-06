import { SAVE_USER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        conversation: action.payload,
      };
    default:
      return state;
  }
};
