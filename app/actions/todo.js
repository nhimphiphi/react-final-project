import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_FILTER
} from '../constants';

const actionCreator = (type, ...argNames) => {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[arg] = args[index];
    });

    return action;
  };
};

export const addTodo = actionCreator(ADD_TODO, 'text');
export const toggleTodo = actionCreator(TOGGLE_TODO, 'id');
export const changeFilter = actionCreator(CHANGE_FILTER, 'Filter');

// export const addTodo = (text) => ({
//   type: ADD_TODO,
//   id: v4(),
//   text
// });

// export const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   id
// });

// export const changeFilter = (filter) => ({
//   type: CHANGE_FILTER,
//   filter
// });
