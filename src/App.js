import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "./redux/actions/counterAction";
import Todos from "./components/Todos/Todos";
import Posts from "./components/Posts/Posts";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter_reducer.count);

  return (
    <div className="App">
      <div style={{ marginBottom: 30 }}>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement(2))}>Decrement</button>
        <button onClick={() => dispatch(increment(1))}>Increment</button>
      </div>
      <Todos />
      <h1>Posts</h1>
      <Posts />
    </div>
  );
};

export default App;
