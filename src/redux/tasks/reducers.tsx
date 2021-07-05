import {StateProtoTypes} from '../../prototypes/task';
import {
  TasksActionTypes,
  ADDTASK,
  UPDATETASK,
  UPDATESCREEN,
  UPDATESTORAGE,
} from './types';

const initialState: StateProtoTypes = {
  tasks: [],
  screen: 'All',
};

export function tasksReducer(
  state = initialState,
  action: TasksActionTypes,
): StateProtoTypes {
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        tasks: [...state.tasks, {...action.payload.task}],
      };
    case UPDATETASK:
      let newState = state.tasks.map(element => {
        if (element.id === action.payload.task.id) {
          element.state = action.payload.task.state;
        }
        return element;
      });
      return {
        ...state,
        tasks: newState,
      };
    case UPDATESCREEN:
      return {
        ...state,
        screen: action.payload.screen,
      };
    case UPDATESTORAGE:
      return {
        ...state,
        tasks: [...action.payload.task],
      };
    default:
      return state;
  }
}
