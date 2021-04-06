export const selectAllUsers = (state) => state.users;

export const allEmailsUsers = (state) => state.users.map((user) => user.email);
