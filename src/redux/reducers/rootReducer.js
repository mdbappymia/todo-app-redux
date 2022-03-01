import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import postReducer from "./postReducer";

import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  counter_reducer: counterReducer,
  todo_reducer: todoReducer,
  post_reducer: postReducer,
});
