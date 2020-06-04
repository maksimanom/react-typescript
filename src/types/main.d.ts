interface TaskData {
  id: number;
  text: string;
  description: string;
}

declare interface BoardData {
  id: number;
  title: string;
  tasks: Array<taskData>;
}
