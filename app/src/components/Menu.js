import React from "react";
import "../css/menu.css";

export default class Menu extends React.Component {
  render() {
    return (
      <nav>
        <a href="#">Docs</a>
        <a href="#">FAQs</a>
        <a href="#">Colab!</a>
      </nav>
    );
  }
}
