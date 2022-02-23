import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addToComplete,
  addTodoText,
  addToTodos,
  removeTodos,
} from "../../redux/actions/todoAction";

const Todos = () => {
  const dispatch = useDispatch();
  const todoText = useSelector((state) => state.todoText);
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => dispatch(addTodoText(e.target.value))}
      />
      <button onClick={() => dispatch(addToTodos(todoText))}>Add todo</button>
      <div>
        <h1>All todos</h1>
        {todos.map((todo, i) => (
          <li key={i}>
            <input
              checked={todo.complete}
              onChange={() =>
                dispatch(
                  addToComplete({ todo: todo.todo, complete: !todo.complete })
                )
              }
              type="checkbox"
              name=""
              id=""
            />
            <span style={{ color: todo.complete ? "green" : "red" }}>
              {todo.todo}
            </span>
            {/* <button
              onClick={() =>
                dispatch(addToComplete({ todo: todo.todo, complete: true }))
              }
            >
              complete
            </button> */}
            <button onClick={() => dispatch(removeTodos(todo))}>delete</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Todos;
