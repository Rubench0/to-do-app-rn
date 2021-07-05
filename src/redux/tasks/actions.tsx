import {TaskProtoTypes, ScreenProtoTypes} from '../../prototypes/task';
import {
  TasksActionTypes,
  ADDTASK,
  UPDATETASK,
  UPDATESCREEN,
  UPDATESTORAGE,
} from './types';

export function addTask(task: TaskProtoTypes): TasksActionTypes {
  return {
    type: ADDTASK,
    payload: task,
  };
}

export function updateTask(task: TaskProtoTypes): TasksActionTypes {
  return {
    type: UPDATETASK,
    payload: task,
  };
}

export function updateScreen(screen: ScreenProtoTypes): TasksActionTypes {
  return {
    type: UPDATESCREEN,
    payload: screen,
  };
}

export function setStorageTask(task: TaskProtoTypes): TasksActionTypes {
  return {
    type: UPDATESTORAGE,
    payload: task,
  };
}
