import { createStore } from "redux";
import { counterReducer } from "../reducers/counterReducer";
import { rootReducer } from "../reducers/rootReducer";
import { todoReducer } from "../reducers/todoReducer";

const store = createStore(rootReducer);

export default store;
