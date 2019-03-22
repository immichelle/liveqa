import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import { fetchSessions } from "../../actions";
class SessionList extends Component {
  static propTypes = {};
  componentDidMount() {
    this.props.fetchSessions();
  }
 
  renderSessionList() {
    if (this.props.sessions) {
      return this.props.sessions.map(session => {
        return (
          <Link to={`/sessions/${session.qaId}`} style={{textDecoration: "none"}}>
            <div key={session.qaId} className="session-item">
              <img
                src={`http://localhost:8081/${session.user.picture}`}
                alt="user"
                className="agent-avatar"
              />
              <div><span>
                {session.user.name}
              </span>
              <div>
                <span>Q&A</span> <span className="live"> Live </span></div>
              </div>
              <div style={{width: "40%"}}> {session.topic} </div>
              <img
                className="arrow"
                src="http://localhost:8081/assets/circle_rightarrow.png"
                alt="right arrow"
              />
            </div>
          </Link>
        );
      });
    }
  }
  render() {
    return (
      <div className="session-list">
        {this.renderSessionList()}
      </div>
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
)(SessionList);
