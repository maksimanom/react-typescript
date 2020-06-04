import React, { ChangeEvent, MouseEvent } from "react";
import { Box, Button, TextField } from "@material-ui/core/";

import useStyles from "./style";

interface BoardsBlockProps {
  boards: BoardData[];
  setBoards: Function;
}
const BoardsBlock: React.FC<BoardsBlockProps> = (props) => {
  const classes = useStyles();
  const { boards, setBoards } = props;
  const [addBoardVisible, setAddBoardVisible] = React.useState<Boolean>(false);
  const [newBoardName, setNewBoardName] = React.useState<String>("");

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "showAddBoardBlock") {
      setAddBoardVisible(!addBoardVisible);
    }
    if (e.currentTarget.name === "addBoardButton" && newBoardName!=="") {
      setAddBoardVisible(!addBoardVisible);
      //must addBlock func start
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewBoardName(e.currentTarget.value);    
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.addOtherBlock}>
        {!addBoardVisible ? (
          <Button
            color="primary"
            variant="contained"
            name="showAddBoardBlock"
            onClick={handleClick}
          >
            Add board
          </Button>
        ) : (
          <Box className="addBoardBlock">
            <TextField fullWidth onChange={handleChange}></TextField>
            <Button
              color="primary"
              name="addBoardButton"
              variant="contained"
              onClick={handleClick}
            >
              Add board
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default BoardsBlock;
