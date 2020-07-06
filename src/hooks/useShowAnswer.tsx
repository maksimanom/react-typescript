import React from "react";
import { TextField } from "@material-ui/core";

interface ShowAnswerProps {
  type: string;
  answers: string[] | string;
}
const ShowAnswer: React.FC<ShowAnswerProps> = (props) => {
  const {type, answers} = props;
  const [answer, setAnswer] = React.useState<string | string[]>("");
  return <>
    {
      type==="text" ?
      <TextField></TextField>
      :
      <p>fd</p>
    }
  </>;
};
export default ShowAnswer;
