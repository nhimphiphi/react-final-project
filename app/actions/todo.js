import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_FILTER
} from '../constants';

let newTodoId = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: newTodoId++,
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    filter
  };
};
