import React, { ChangeEvent, MouseEvent } from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

import addTaskToList from "../../utils/addTask";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: 'flex-end',
      "& .add-button":{
        width: 150,
        marginLeft: 5,
      }
    },
  })
);

interface AddTaskProps {
  toDoList: ListItem[];
  setToDoList: Function;
}
const AddTask: React.FC<AddTaskProps> = (props) => {
  const classes = useStyles();
  const { toDoList, setToDoList } = props;
  const [inputValue, setInputValue] = React.useState<String>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (inputValue.length) {
      addTaskToList(toDoList, setToDoList, inputValue);
    }
    setInputValue("");
  };

  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter new task"
        color="primary"
      ></TextField>
      <Button
        className="add-button"
        color="primary"
        variant="contained"
        onClick={handleClick}
      >
        add task
      </Button>
    </div>
  );
};
export default AddTask;
