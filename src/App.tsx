import React from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CheckIcon from "@material-ui/icons/Check";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
      marginTop: 30,
    },
    table: {
      "& .headingRow": {
        backgroundColor: "#f0f0f0",
        display: "flex",
        "& .head-cell": {
          width: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    },
  })
);

function App() {
  const classes = useStyles(); 

  return (
    <Grid container className={classes.root}>
      <Grid item xs={10} md={12} className={classes.table}>
        <div className="headingRow">
          <div className="head-cell">
            <FormatListNumberedIcon />
          </div>
          <div>
            <TextFieldsIcon />
          </div>
          <div className="head-cell">
            <CheckIcon />
          </div>
          <div className="head-cell">
            <DeleteForeverIcon />
          </div>
        </div>
        <div className="list-block">

        </div>
      </Grid>
    </Grid>
  );
}

export default App;
