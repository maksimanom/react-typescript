import React, { MouseEvent } from "react";

import { Grid, CssBaseline, Button } from "@material-ui/core/";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Question from "./component/question";
import addQuestion from "./utils/addQuestion";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& .MuiButton-root": {
        borderRadius: "50%",
        minWidth: 0,
        width: 50,
        height: 50,
        padding: 0,
      },
    },
    item:{
      width: "100%"
    }
  })
);

function App() {
  const classes = useStyles();
  const [questions, setQuestions] = React.useState<QuestionInterface[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    addQuestion(questions, setQuestions);
  };

  console.log("questions", questions);
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={10} className={classes.item}>
        {questions.map((q, index) => {
          return <Question key={q.id} question={q} />;
        })}
      </Grid>
      <Button variant="contained" color="primary" onClick={handleClick}>
        +
      </Button>
    </Grid>
  );
}

export default App;
