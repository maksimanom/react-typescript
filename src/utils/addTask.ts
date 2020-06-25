const addTask = (
  toDoList: ListItem[],
  setToDoList: Function,
  newItem: String
) => {
  let maxId: number = Math.max.apply(
    null,
    toDoList.map((item) => item.id)
  );
  if (maxId < 0) {
    maxId = 0;
  } else {
    maxId += 1;
  }

  setToDoList((prev: ListItem[]) => [
    ...prev,
    { id: maxId, text: newItem, done: false },
  ]);
};
export default addTask;
