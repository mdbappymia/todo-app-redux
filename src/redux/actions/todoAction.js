export const addTodoText = (payload) => {
  return {
    type: "TODO_TEXT",
    payload,
  };
};

export const addToTodos = (payload) => {
  return {
    type: "ADD_TODO",
    payload,
  };
};
export const removeTodos = (payload) => {
  return {
    type: "REMOVE_TODO",
    payload,
  };
};
export const addToComplete = (payload) => {
  return {
    type: "ADD_TO_COMPLETE",
    payload,
  };
};
