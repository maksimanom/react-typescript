import React, { useEffect } from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CheckIcon from "@material-ui/icons/Check";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddTask from "./components/addTask";
import ItemList from "./components/itemList/itemList";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
      marginTop: 30,
    },
    table: {
      "& .util-cell": {
        width: 30,
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .MuiCheckbox-root": {
          color: "inherit",
        },
      },
      "& .cell-wrapper-header": {
        display: "flex",
        color: "#fff",
      },
      "& .cell-wrapper": {
        display: "flex",
        color: "inherit",
      },
      "& .headingRow": {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        borderRadius: 4,
      },
      "& .item-row": {
        display: "flex",
        justifyContent: "space-between",
        "& .item-text": {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        },
      },
    },
  })
);

function App() {
  const classes = useStyles();
  const [toDoList, setToDoList] = React.useState<ListItem[]>([]);

  console.log("in main:", toDoList);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={10} className={classes.table}>
        <Box className="headingRow" component="header">
          <div className="util-cell">
            <FormatListNumberedIcon />
          </div>
          <div className="util-cell">
            <TextFieldsIcon />
          </div>
          <div className="cell-wrapper-header">
            <div className="util-cell">
              <CheckIcon />
            </div>
            <div className="util-cell">
              <DeleteForeverIcon />
            </div>
          </div>
        </Box>
        <div className="list-block">
          {toDoList.length &&
            toDoList.map((item, index) => {
              return (
                <ItemList
                  task={item}
                  toDoList={toDoList}
                  setToDoList={setToDoList}
                  index={index}
                  key={item.id}
                ></ItemList>
              );
            })}
        </div>
        <AddTask toDoList={toDoList} setToDoList={setToDoList}></AddTask>
      </Grid>
    </Grid>
  );
}

export default App;
