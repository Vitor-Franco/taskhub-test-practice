/* eslint-disable import/no-anonymous-default-export */
export default function (state = [], action) {
  switch (action.type) {
    case 'REGISTER_NEW_USER':
      return [...state, action.payload];
    default:
      return state;
  }
}
