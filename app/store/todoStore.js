import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const logger = (store) => (next) => (action) => {
  if (!console.group) {
    return next(action);
  }

  console.group(action.type);
  console.info('%c prev state', 'color: grey', store.getState());
  console.info('%c action', 'color: blue', action);
  const result = next(action);
  console.info('%c next state', 'color: green', store.getState());
  console.groupEnd();

  return result;
};

// const initialState = {
//   todos: [
//     {
//       id: 1,
//       text: 'Item 1',
//       completed: false
//     },
//     {
//       id: 2,
//       text: 'Item 2',
//       completed: true
//     }
//   ]
// };

const todoStore = createStore(
  reducers,
  loadState(),
  applyMiddleware(logger)
);

todoStore.subscribe(throttle(() => {
  saveState({
    todos: todoStore.getState().todos
  });
}), 1000);

export default todoStore;
