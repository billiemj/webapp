import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/media/Home";
import AddMedia from "./components/media/AddMedia";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Bazinga" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add-media" component={AddMedia} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
