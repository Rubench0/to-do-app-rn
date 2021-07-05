import {combineReducers} from 'redux';
import {tasksReducer} from './tasks/reducers';

export const rootReducer = combineReducers({
  todo: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
