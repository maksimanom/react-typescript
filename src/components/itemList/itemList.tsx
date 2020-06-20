import React, { ChangeEvent, MouseEvent } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import classes from "*.module.css";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TextField, Checkbox } from "@material-ui/core";
import changeTask from "../../utils/changeTask";
import changePerfomance from "../../utils/changePerfomance";
import deleteTask from "../../utils/deleteTask";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      "& .item-text": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      },
    },
  })
);

interface ItemCheckboxProps {
  perf: boolean;
  handleClick: Function;
}
const ItemCheckbox: React.FC<ItemCheckboxProps> = (props) => {
  const { perf, handleClick } = props;
  return (
    <Checkbox color="primary" checked={perf} onClick={(e) => handleClick(e)} />
  );
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
    <div key={task.id} className={classes.root}>
      <div className="util-cell">{index+1}</div>
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
