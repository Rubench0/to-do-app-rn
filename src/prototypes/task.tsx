export interface TaskProtoTypes {
  task: any;
}

export interface ScreenProtoTypes {
  screen: string;
}

export interface StateProtoTypes {
  tasks: any[];
  screen: string;
}

export interface ItemTask {
  id: number;
  title: string;
  deadline: string;
  startTime: string;
  endTime: string;
  remind: string;
  repeat: string;
  state: boolean;
}
