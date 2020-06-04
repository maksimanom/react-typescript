import {
  createStyles,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    addOtherBlock: {
      width: 200,
      "& .addBoardBlock": {
        backgroundColor: "rgba(0,0,0, 0.3)",
      },
    },
  })
);

export default useStyles;
