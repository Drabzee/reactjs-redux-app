import { createStore, combineReducers, applyMiddleware } from  'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cakeReducer from './cake/cakeReducer';
import donutReducer from './donut/donutReducer';
import usersReducer from './users/usersReducer';
import todoReducer from './todo/todoReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  donut: donutReducer,
  users: usersReducer,
  todo: todoReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;