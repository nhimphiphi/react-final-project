import { combineReducer } from 'redux';
import filter from './filter';
import todo from './todo';

const rootReducer = combineReducer({
  filter,
  todo
});

export default rootReducer;
