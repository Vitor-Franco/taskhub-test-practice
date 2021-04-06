const initialState = [];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        {
          id: nextTodoId(state),
          ...action.payload,
          completed: false,
        },
        ...state,
      ];
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }

    case 'todos/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload);
    }

    case 'todos/updateTodo': {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) return todo;

        return {
          ...action.payload,
        };
      });
    }

    default:
      return state;
  }
}
