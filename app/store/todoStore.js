import { createStore } from 'redux';
import reducers from '../reducers';

const todoStore = createStore(
  reducers
);

export default todoStore;
