import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducer from "./reducers";

const initialState = {
  user: {
    email: null,
    pass: null
  },
  isLogged: false,
  showList: false,
  gitLogin: false,
  token: null, 
  repositoryList: [], 
  favRepositoryList: []
};

export const store = createStore(reducer, initialState, applyMiddleware(reduxThunk));
