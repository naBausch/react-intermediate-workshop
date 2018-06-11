import React, { Component } from "react";
import Toolbar from "./Toolbar";
import { ThemeContext, themes } from "./ThemeContext";

class Context extends Component {
  state = {
    theme: themes.light
  };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Toolbar changeTheme={this.toggleTheme} />
      </ThemeContext.Provider>
    );
  }
}

export default Context;
import React, { Component