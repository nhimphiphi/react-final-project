import {
  ADD_TODO,
  TOGGLE_TODO,
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED
} from '../constants';

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];

    case TOGGLE_TODO:
      return state.map(t => todo(t, action));

    default:
      return state;
  }
};

export default todos;

export const visibleTodos = (state, filter) => {
  switch (filter) {
    case FILTER_ALL:
      return state;
    case FILTER_ACTIVE:
      return state.filter(t => !t.completed);
    case FILTER_COMPLETED:
      return state.filter(t => t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};
