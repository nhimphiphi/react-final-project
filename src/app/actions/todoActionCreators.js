import constants from '../constants';

let nextTodoId = 0;

const todoActionCreators = {
  addTodo(text) {
<<<<<<< HEAD
      return {
      type: constants.ADD_TODO,
      id: nextTodoId++,
      text
=======
    let nextId = !!localStorage.getItem('dataState') ? localStorage.getItem('dataState').length : 0;
    return {
      type: constants.ADD_TODO,
      id: nextId,
     	text
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4
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
<<<<<<< HEAD
=======

>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4
