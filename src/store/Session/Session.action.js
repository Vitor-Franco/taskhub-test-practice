export function StartSession(userData) {
  return {
    type: 'session/sessionCreate',
    payload: userData,
  };
}

export function DropSession() {
  return {
    type: 'session/sessionDrop',
  };
}
