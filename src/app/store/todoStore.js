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
	getData(),
	applyMiddleware(logger)
);

function getData() {
  // TODO get state from localstorage
  //localStorage.removeItem('dataState');
  var data = JSON.parse(localStorage.getItem('dataState')) || {};
  return data;
}

const saveState = () => {
	// TODO save next state into local storage
	const nextState = todoStore.getState();
	console.log('next state', nextState);
	localStorage.setItem("dataState", JSON.stringify(nextState));
}

todoStore.subscribe(saveState);

export default todoStore;
