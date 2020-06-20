const changePerfomance = (
  toDoList: ListItem[],
  setToDoList: Function,
  id: number
) => {
  const toDoListCopy: ListItem[] = [...toDoList];
  const index: number = toDoListCopy.findIndex((task) => task.id === id);
  toDoListCopy[index] = {
    ...toDoListCopy[index],
    done: !toDoListCopy[index].done,
  };
  setToDoList(toDoListCopy);
};
export default changePerfomance;
