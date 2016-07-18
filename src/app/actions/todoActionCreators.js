import constants from '../constants';

let nextTodoId = 0;

const todoActionCreators = {
  addTodo(text) {
    let nextId = !!localStorage.getItem('dataState') ? localStorage.getItem('dataState').length : 0;
    return {
      type: constants.ADD_TODO,
      id: nextId,
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

