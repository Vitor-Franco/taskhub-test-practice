import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todosReducer from './TodoList/TodoList.reducer';
import registerUser from './RegisterUser/RegisterUser.reducer';
import sessionReducer from './Session/Session.reducer';

const rootReducer = combineReducers({
  users: registerUser,
  todos: todosReducer,
  session: sessionReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
