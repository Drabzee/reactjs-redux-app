import { ADD_TODO, REMOVE_TODO } from './todoTypes';

const initialState = {
  counter: 1,
  todos: []
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({id: state.counter, title: action.todo}),
        counter: state.counter + 1
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => action.id !== todo.id)
      }
    default: return state;
  }
}

export default todoReducer;