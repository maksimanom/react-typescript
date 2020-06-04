import React, { useEffect } from "react";

import { CircularProgress, Grid } from "@material-ui/core/";
import useStyles from "./appStyles";

import Header from "./Components/header";
import BoardsBlock from "./Components/boardsBlock/boardsBlock";
import setDefaultBoardsIfNoPresent from "./utils/setDefaultIfNoPresent";

const App: React.FC = () => {
  const classes = useStyles();
  const [boards, setBoards] = React.useState<BoardData[]>();
  useEffect(() => {
    setDefaultBoardsIfNoPresent();
    const storageData = localStorage.getItem("trelloBoards");
    if (storageData) {
      const data: BoardData[] = JSON.parse(storageData);
      setBoards(data);
    }
  }, []);

  if (boards === undefined) {
    return <CircularProgress />;
  }
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <BoardsBlock boards={boards} setBoards={setBoards} />
      </Grid>
    </Grid>
  );
};

export default App;
