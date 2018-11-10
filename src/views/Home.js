import React, { Component } from "react";
import logo from "assets/logo.svg";
import NavLink from "react-router-dom/NavLink";

export default class Home extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NavLink to="/about">About</NavLink>
      </header>
    );
  }
}
