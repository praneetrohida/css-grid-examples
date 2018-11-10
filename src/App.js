import React, { Component } from "react";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";

import Home from "./views/Home";
import About from "./views/About";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
