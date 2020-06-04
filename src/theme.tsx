import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff9900",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#f3ff3f",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
