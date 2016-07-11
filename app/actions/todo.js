import { v4 } from 'node-uuid';
import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_FILTER
} from '../constants';

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: v4(),
  text
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter
});
