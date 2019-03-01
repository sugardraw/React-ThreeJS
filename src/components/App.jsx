import React, { Component } from "react";
import Header from "./header/Header";



class App extends Component {
  constructor() {
    super();
    this.state = {
      model: ""
    };
  }
  changeModel = e => {
    this.setState({ model: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
