import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Switch>
        <Nav></Nav>
        <Route exact path="/Contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
