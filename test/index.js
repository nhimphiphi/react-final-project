import expect from 'expect';
import * as actions from '../app/actions/todo';
import * as types from '../app/constants';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.ADD_TODO,
      text
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  })
})
