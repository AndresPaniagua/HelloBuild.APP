import { SAVE_USER, IS_LOOGED } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case IS_LOOGED:
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
};
