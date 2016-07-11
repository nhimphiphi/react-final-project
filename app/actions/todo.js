import { v4 } from 'node-uuid';
import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_FILTER
} from '../constants';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: v4(),
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
