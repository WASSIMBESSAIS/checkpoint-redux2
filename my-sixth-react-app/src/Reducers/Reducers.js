const initialState = {
    tasks: [
      { id: 1, description: 'Breakfast at 7:00', isDone: true },
      { id: 2, description: 'Going to work at 8:00', isDone: true },
      { id: 3, description: 'Having A coffee after work at 16:00', isDone: false },
      { id: 4, description: "I'll go to the Gym at 18:00", isDone: false },
      { id: 5, description: 'Shower at home after GYM', isDone: false },
    ],
    filter: 'ALL', 
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
  
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.taskId ? action.payload.updatedTask : task
          ),
        };
  
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, isDone: !task.isDone } : task
          ),
        };
  
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  