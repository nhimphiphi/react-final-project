import { createStore, applyMiddleware } from 'redux';
import todoApp from '../reducers/todoApp';

const logger = (store) => (next) => (action) => {
	console.log('prev state:', store.getState());
	console.log('dispatching:', action);
	let result = next(action);
	console.log('next state', store.getState());
  return result
};

const todoStore  = createStore(
	todoApp,
	applyMiddleware(logger)
);

export default todoStore;
