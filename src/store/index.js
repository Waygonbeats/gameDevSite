/* import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import userReducer from "./slices/userSlice";
import thunk from "redux-thunk";
 export const store = configureStore({
  reducer: {
    user: userReducer,
    
  },
}); 
const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

 */