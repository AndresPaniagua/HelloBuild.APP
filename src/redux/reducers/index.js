import { SAVE_USER, IS_LOOGED, SHOW_LIST, TOKEN, REPOSITORY_LIST, FAV_REPOSITORY_LIST, GIT_LOGIN } from "../types";

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
    case REPOSITORY_LIST:
      return {
        ...state,
        repositoryList: action.payload,
      };
    case FAV_REPOSITORY_LIST:
      return {
        ...state,
        favRepositoryList: action.payload,
      };
    case GIT_LOGIN:
      return {
        ...state,
        gitLogin: action.payload,
      };
    default:
      return state;
  }
};
