import { ADD_TODO, TOGGLE_TODO } from '../constants';

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return action.filter;
    case TOGGLE_TODO:
      return action.filter;
    default:
      return state;
  }
};

export default todo;
