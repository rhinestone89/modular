import "fontsource-roboto";
import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

// const GlobalCss = withStyles({
//   // @global is handled by jss-plugin-global.
//   "@global": {
//     // You should target [class*="MuiButton-root"] instead if you nest themes.
//     ".MuiButton-root": {
//       background: "black",
//     },
//   },
// })(() => null);

render(
  <React.StrictMode>
    {/* <GlobalCss /> */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
