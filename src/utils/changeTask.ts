const changeText = (
  toDoList: ListItem[],
  setToDoList: Function,
  id: number,
  newTaskText: string
) => {
  let toDoListCopy: ListItem[] = [...toDoList];
  let itemIndexToChange = toDoListCopy.findIndex((item) => item.id === id);
  toDoListCopy[itemIndexToChange] = { id: id, text: newTaskText, done: false };
  setToDoList(toDoListCopy);
};
export default changeText;
