import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import AddMedia from "./AddMedia";
import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="bazinga" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/media/add-media" component={AddMedia} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
