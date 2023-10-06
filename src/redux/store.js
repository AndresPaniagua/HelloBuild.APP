import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducer from "./reducers";

const initialState = {
  user: {
    username: null,
    password: null,
  },
};

export const store = createStore(reducer, initialState, applyMiddleware(reduxThunk));
