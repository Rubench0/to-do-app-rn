import {TaskProtoTypes, ScreenProtoTypes} from '../../prototypes/task';
export const ADDTASK = 'ADDTASK';
export const UPDATETASK = 'UPDATETASK';
export const UPDATESCREEN = 'UPDATESCREEN';
export const UPDATESTORAGE = 'UPDATESTORAGE';

interface AddTaskAction {
  type: typeof ADDTASK;
  payload: TaskProtoTypes;
}
interface UpdateTaskAction {
  type: typeof UPDATETASK;
  payload: TaskProtoTypes;
}
interface UpdateScreenAction {
  type: typeof UPDATESCREEN;
  payload: ScreenProtoTypes;
}
interface UpdateStorageTasksAction {
  type: typeof UPDATESTORAGE;
  payload: TaskProtoTypes;
}

export type TasksActionTypes =
  | AddTaskAction
  | UpdateTaskAction
  | UpdateScreenAction
  | UpdateStorageTasksAction;
