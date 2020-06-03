interface taskData {
  id: number;
  text: string;
  description: string;
}

declare interface boardData {
  id: number;
  title: string;
  tasks: Array<taskData>;
}
