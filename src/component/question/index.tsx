import React, { ChangeEvent } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Theme,
  createStyles,
  makeStyles,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import changeType from "../../utils/changeType";
import ShowAnswer from "../../hooks/useShowAnswer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);

interface QuestionProps {
  question: QuestionInterface;
  questionsArray: QuestionInterface[];
  setQuestions: Function;
}
const Question: React.FC<QuestionProps> = (props) => {
  const { question, questionsArray, setQuestions } = props;
  const classes = useStyles();

  const handleChange = (e: ChangeEvent<{ value: unknown }>) => {
    changeType(
      questionsArray,
      setQuestions,
      question.id,
      e.currentTarget.value as string
    );
  };

  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={question.id.toString()}
        id={question.id.toString()}
      >
        <p>{question.title}</p>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            native
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={question.type}
            onChange={handleChange}
          >
            <option value="text">Text</option>
            <option value="checkbox">Multiple</option>
            <option value="radio">Single</option>
            <option value="description">Description</option>
          </Select>
        </FormControl>
        <ShowAnswer type={question.type} answers={question.choice} />
      </AccordionDetails>
    </Accordion>
  );
};
export default Question;
