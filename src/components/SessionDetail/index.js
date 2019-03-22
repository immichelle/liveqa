import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSessionDetail } from "../../actions";
import "./style.css";
class SessionDetail extends Component {
  componentDidMount() {
    this.props.fetchSessionDetail(this.props.match.params.id);
  }
  renderTopic() {
    const { topic } = this.props.sessionDetail;
    return (
      <div className="topic">
        <span> Topic: </span> {topic}{" "}
      </div>
    );
  }
  renderDetail() {
    const { qaId, topic, user, questions } = this.props.sessionDetail;
    if (questions) {
      return questions.map(question => {
        return (
          <div className="question" key={qaId}>
            <div
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                marginTop: "5px",
                width: "100%"
              }}
            >
              {/* User question starts here */}
              <section className="user-info">
                <img
                  src={`http://localhost:8081/${question &&
                    question.user &&
                    question.user.picture}`}
                  alt="user avatar"
                  className="medium-avatar"
                />
                <div>
                  {" "}
                  <div key={question && question.id}>
                    {" "}
                    {question && question.user.name}{" "}
                    <div> {question && question.user.location} </div>{" "}
                  </div>
                </div>
              </section>
              <div> {question && question.text} </div>{" "}
              {/* Agent answer starts here */}
              <section className="answer">
                <div>
                  <div className="agent-info">
                    <div key={user && user.id}> {user && user.name} </div>{" "}
                    <img
                      src={`http://localhost:8081/${user && user.picture}`}
                      alt="agent avatar"
                      className="small-avatar"
                    />
                  </div>
                  <div> {question && question.answer} </div>{" "}
                </div>
              </section>{" "}
            </div>{" "}
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className="session-detail">
        <div>
          {" "}
          {this.renderTopic()}{" "}
          <button onClick={this.props.history.goBack}> Back </button>{" "}
        </div>{" "}
        <div> {this.renderDetail()} </div>{" "}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sessionDetail: state.sessions.sessionDetail
  };
};
const mapDispatchToProps = {
  fetchSessionDetail
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionDetail);
