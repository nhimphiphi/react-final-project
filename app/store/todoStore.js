import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const logger = (store) => (next) => (action) => {
  if (!console.group) {
    return next(action);
  }

  console.group(action.type);
  console.log('%c prev state', 'color: grey', store.getState());
  console.log('%c action', 'color: blue', action);
  const result = next(action);
  console.log('%c next state', 'color: green', store.getState());
  console.groupEnd();

  return result;
};

const todoStore = createStore(
  reducers,
  applyMiddleware(logger)
);

export default todoStore;
