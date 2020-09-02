import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
