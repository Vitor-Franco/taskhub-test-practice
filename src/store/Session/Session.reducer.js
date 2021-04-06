export default function sessionReducer(state = {}, action) {
  switch (action.type) {
    case 'session/sessionCreate': {
      return { ...action.payload };
    }
    case 'session/sessionDrop': {
      return {};
    }
    default:
      return state;
  }
}
