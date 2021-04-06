export function TodoAdded(data) {
  return {
    type: 'todos/todoAdded',
    payload: data,
  };
}

export function DeleteTodo(id) {
  return {
    type: 'todos/todoDeleted',
    payload: id,
  };
}

export function toggleTodo(id) {
  return {
    type: 'todos/todoToggled',
    payload: id,
  };
}

export function updateTodo(data) {
  return {
    type: 'todos/updateTodo',
    payload: data,
  };
}
