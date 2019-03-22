import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import SessionList from "./components/SessionList";
import SessionDetail from "./components/SessionDetail";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav-left">
            <img
              className="logo"
              src="http://localhost:8081/assets/watermelon.png" alt="watermelon"
            />
            <span> Slice </span>
          </div>
          <div className="nav-right">
            <ul>
              <li>
                <a href="">
                  <span className="active"> Q & A </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span> JOBS </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span> CONTACT </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="box-container">
          <div className="box">
            <Router>
              <Switch>
                <Route exact path="/sessions" component={SessionList} />
                <Route exact path="/sessions/:id" component={SessionDetail} />
              </Switch>
            </Router>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
