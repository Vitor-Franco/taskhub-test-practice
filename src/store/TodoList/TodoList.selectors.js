export const selectAllTodosByIds = (state, session_id) =>
  state.todos.filter((todo) => todo.user_id === session_id);

export const selectTodoById = (state, todo_id) => {
  return state.todos.find((todo) => todo.id === todo_id);
};
