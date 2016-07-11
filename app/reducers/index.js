import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;

export const visibleTodos = (state, filter) => (
  fromTodos.visibleTodos(state.todos, filter)
);
