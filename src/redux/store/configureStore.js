import { combineReducers, createStore } from "redux";
import { todoReducer } from "../reducers/todoReducer";
import { counterReducer } from "./../reducers/counterReducer";

const rootReducer = combineReducers({ counterReducer, todoReducer });

const store = createStore(todoReducer);

export default store;
