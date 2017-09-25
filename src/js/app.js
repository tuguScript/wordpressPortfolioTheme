import "./script.js";
import "./owl.carousel.min.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/Blog/App";
import Work from "./components/Work/Work";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(<App />, document.getElementById("blogPost"));

ReactDOM.render(
  <MuiThemeProvider>
    <Work />
  </MuiThemeProvider>,
  document.getElementById("work")
);
