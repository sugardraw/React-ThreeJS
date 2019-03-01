import React, { Component } from "react";
import Canvas from "./Canvas";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          class="d-flex justify-content-between flex-wrap flex-md-row intro"
          id="top"
        >
          <Canvas />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
