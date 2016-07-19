import constants from '../constants';

let nextTodoId = 0;

const todoActionCreators = {
  addTodo(text) {
      return {
      type: constants.ADD_TODO,
      id: nextTodoId++,
      text
    }
  },

  setVisibilityFilter (filter) {
    return {
      type: constants.VISIBILITYFILTERS_TODO,
      filter
    }
  },

  toggleTodo(id) {
    return {
      type: constants.TOGGLE_TODO,
      id
    }
  }
};

export default todoActionCreators;
