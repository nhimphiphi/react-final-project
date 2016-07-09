import {
  CHANGE_FILTER,
  FILTER_ALL
} from '../constants';

const filter = (state = FILTER_ALL, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
