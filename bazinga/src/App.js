import React, { Component } from "react";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Bazinga" />
        <div className="container">
          <h1>Hello World</h1>
        </div>
      </div>
    );
  }
}

export default App;
