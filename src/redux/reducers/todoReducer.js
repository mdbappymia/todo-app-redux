const initialState = {
  todoText: "",
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_TEXT": {
      return {
        ...state,
        todoText: action.payload,
      };
    }
    case "ADD_TODO": {
      if (!state.todoText) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, { todo: action.payload, complete: false }],
        todoText: "",
      };
    }
    case "REMOVE_TODO": {
      const remaining = state.todos.filter(
        (todo) => todo.todo !== action.payload.todo
      );
      return {
        ...state,
        todos: remaining,
      };
    }
    case "ADD_TO_COMPLETE": {
      const todosArr = [];
      for (let todo of state.todos) {
        if (todo.todo === action.payload.todo) {
          todo = action.payload;
        }
        todosArr.push(todo);
      }
      return {
        ...state,
        todos: todosArr,
      };
    }
    default: {
      return state;
    }
  }
};
