import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  counter_reducer: counterReducer,
  todo_reducer: todoReducer,
});
