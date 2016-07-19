import { createStore } from 'redux';
import todoApp from '../reducers/todoApp';

const todoStore  = createStore(
	todoApp
);

export default todoStore;
