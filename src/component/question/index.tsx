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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);

interface QuestionProps {
  question: QuestionInterface;
}
const Question: React.FC<QuestionProps> = (props) => {
  const { question } = props;
  const classes = useStyles();

  const handleChange = (e: ChangeEvent<{ value: unknown }>) => {
    console.log(e.target.value);
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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={question.type}
            onChange={handleChange}
          >
            <MenuItem value="text">Text</MenuItem>
            <MenuItem value="checkbox">Multiple</MenuItem>
            <MenuItem value="radio">Single</MenuItem>
            <MenuItem value="description">Description</MenuItem>
          </Select>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};
export default Question;
