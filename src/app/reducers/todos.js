import constants from '../constants';

const todo = (state, action) => {
  console.log('todos reducer', state, action);
  switch (action.type) {
    case constants.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case constants.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case constants.TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos;
