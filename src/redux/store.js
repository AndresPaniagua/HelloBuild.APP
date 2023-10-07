import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducer from "./reducers";

const initialState = {
  user: {
    email: null,
  },
  isLogged: false
};

export const store = createStore(reducer, initialState, applyMiddleware(reduxThunk));
