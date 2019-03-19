import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { fetchSessions } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchSessions();
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <nav>
          <div className="nav-left">
            <img className="logo" src="./assets/watermelon.png" alt="" />
            <span>Slice</span>
          </div>
          <div className="nav-right">
            <ul>
              <li>
                <a href="">
                  <span className="active">Q&A</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>JOBS</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>CONTACT</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="box">
          <div className="apple"></div>
        </section>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    sessions: state.sessions.sessionList
  };
};
const mapDispatchToProps = {
  fetchSessions
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
