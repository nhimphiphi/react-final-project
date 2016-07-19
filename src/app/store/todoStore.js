<<<<<<< HEAD
import { createStore } from 'redux';
import todoApp from '../reducers/todoApp';

const todoStore  = createStore(
	todoApp
);

export default todoStore;
=======
import { createStore, applyMiddleware } from 'redux';
import todoApp from '../reducers/todoApp';

const logger = (store) => (next) => (action) => {

	if(!console.group) {
			console.log('dispatching:', action);
			console.log('prev state', store.getState());

			return next(action);
		}
}

const todoStore  = createStore(
	todoApp,
	getData(),
	applyMiddleware(logger)
);

function getData() {
  let data = JSON.parse(localStorage.getItem('dataState')) || {};
  return data;
}

const saveState = () => {
	const nextState = todoStore.getState();
	console.log('next state', nextState);
	localStorage.setItem("dataState", JSON.stringify(nextState));
}

todoStore.subscribe(saveState);

export default todoStore;
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4
