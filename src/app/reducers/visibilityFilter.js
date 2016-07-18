import constants from '../constants';

const visibilityFilter = (state = constants.SHOW_ALL, action) => {
  switch (action.type) {
    case constants.VISIBILITYFILTERS_TODO:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter;
