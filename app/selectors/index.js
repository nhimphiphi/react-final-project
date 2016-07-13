import { createSelector } from 'reselect';
import {
  FILTER_COMPLETED,
  FILTER_ACTIVE
} from '../constants';

const getVisibilityFilter = (state, { params }) => (params.filter || 'all');
const getTodos = (state) => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case FILTER_COMPLETED:
        return todos.filter(todo => todo.completed);
      case FILTER_ACTIVE:
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
);
