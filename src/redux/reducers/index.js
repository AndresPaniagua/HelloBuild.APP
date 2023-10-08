import { toast } from "react-toastify";
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
    case SHOW_PROFILE:
      return {
        ...state,
        showProfile: action.payload,
      };
    case SHOW_SELECTED:
      return {
        ...state,
        showSelected: action.payload,
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
    case MY_SELECTED_REPOS_LIST:
      const name = action.payload.name;
      const exists = state.MySelectedFavRepos.some((ele) => ele.name === name);

      if (exists) {
        toast.warn("It seems you already have this repository in your favorites!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return state;
      }

      toast.success("Added to favorites!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return {
        ...state,
        MySelectedFavRepos: [...state.MySelectedFavRepos, action.payload],
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
