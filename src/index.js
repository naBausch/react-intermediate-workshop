import React, { Component } from "react";
import ReactDOM from "react-dom";
import Context from "./context/Context";
import "./styles.css";

class App extends Component {
  render() {
    return <Context />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
