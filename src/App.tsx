import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import Header from "./Components/header";
import setDefaultBoardsIfNoPresent from "./utils/setDefaultIfNoPresent";

function App() {
  setDefaultBoardsIfNoPresent();
  
  return (
    <>
      <Header />
    </>
  );
}

export default App;
