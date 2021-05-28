import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
