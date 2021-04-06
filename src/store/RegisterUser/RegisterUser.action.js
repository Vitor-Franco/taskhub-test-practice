import { v4 as uuidv4 } from 'uuid';

export function RegisterUser(userData) {
  const generateId = uuidv4();

  return {
    type: 'REGISTER_NEW_USER',
    payload: { id: generateId, ...userData },
  };
}
