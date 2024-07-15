
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../Actions/action';
const initialState = {
    todos: [{ id: 1, text: "Hello World" }],
    nextId: 2,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: state.nextId,
              text: action.payload.text,
            },
          ],
          nextId: state.nextId + 1,
        };
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      case UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  