import { SAVE_USER, IS_LOOGED, SHOW_LIST, TOKEN } from "../types";

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
    case SHOW_LIST:
      return {
        ...state,
        showList: action.payload,
      };
    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
