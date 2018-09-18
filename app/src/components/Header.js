import React from "react";
import Menu from "./Menu.js";
import "../css/header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>React</h1>
        <Menu />
      </header>
    );
  }
}
