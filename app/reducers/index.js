// import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

// const rootReducer = combineReducers({
//   todos
// });

const rootReducer = (state = {}, action) => {
  return {
    todos: todos(state.todos, action)
  };
};

export default rootReducer;

export const visibleTodos = (state, filter) => (
  fromTodos.visibleTodos(state.todos, filter)
);
