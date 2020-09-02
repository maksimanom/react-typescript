const deleteTask = (
  toDoList: ListItem[],
  setToDoList: Function,
  id: number
) => {
  const toDoListCopy = [...toDoList];
  const index = toDoListCopy.findIndex((item) => item.id === id);
  const firstPart = toDoListCopy.slice(0, index);
  const secondPart = toDoListCopy.slice(index + 1, toDoListCopy.length);
  setToDoList(firstPart.concat(secondPart));
};
export default deleteTask;
