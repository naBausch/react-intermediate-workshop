import React, { Component } from "react";
import ThemedButton from "./ThemedButton";

class Toolbar extends Component {
  render() {
    return (
      <ThemedButton onClick={this.props.changeTheme}>Change Theme</ThemedButton>
    );
  }
}

export default Toolbar;
