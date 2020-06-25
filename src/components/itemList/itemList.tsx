import React, { ChangeEvent, MouseEvent } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TextField, Checkbox } from "@material-ui/core";
import changeTask from "../../utils/changeTask";
import changePerfomance from "../../utils/changePerfomance";
import deleteTask from "../../utils/deleteTask";
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      color: "red",
      "& .item-text": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "inherit",
        width: "100%",
        "& .MuiInputBase-root": {
          color: "inherit",
        },
        "& .MuiInput-underline:before": {
          border: "none",
        },
      },
    },
    taskUncompleted: {
      color: theme.palette.primary.main,
    },
    taskCompleted: {
      color: "rgba( 0 , 0 , 0 , 0.42 )",
    },
  })
);

interface ItemCheckboxProps {
  perf: boolean;
  handleClick: Function;
}
const ItemCheckbox: React.FC<ItemCheckboxProps> = (props) => {
  const { perf, handleClick } = props;
  return <Checkbox checked={perf} onClick={(e) => handleClick(e)} />;
};

interface ItemListProps {
  task: ListItem;
  toDoList: ListItem[];
  setToDoList: Function;
  index: number;
}
const ItemList: React.FC<ItemListProps> = (props) => {
  const classes = useStyles();
  const { task, toDoList, setToDoList, index } = props;
  const [newTaskText, setNewTaskText] = React.useState<string>(task.text);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(e.currentTarget.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    changeTask(toDoList, setToDoList, task.id, newTaskText);
  };

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    changePerfomance(toDoList, setToDoList, task.id);
  };

  const handleDelete = () => {
    deleteTask(toDoList, setToDoList, task.id);
  };

  return (
    <div
      key={task.id}
      className={classNames(
        classes.root,
        task.done ? classes.taskCompleted : classes.taskUncompleted
      )}
    >
      <div className="util-cell">{index + 1}</div>
      <div className="item-text">
        <TextField
          fullWidth
          value={newTaskText}
          onChange={handleChange}
          onBlur={handleBlur}
        ></TextField>
      </div>
      <div className="cell-wrapper">
        <div className="util-cell">
          <ItemCheckbox perf={task.done} handleClick={handleClick} />
        </div>
        <div className="util-cell">
          <DeleteOutlineIcon onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};
export default ItemList;
