// import { combineReducers } from 'redux';
import todos from './todos';

// const rootReducer = combineReducers({
//   todos
// });

const rootReducer = (state = {}, action) => {
  return {
    todos: todos(state.todos, action)
  };
};

export default rootReducer;
