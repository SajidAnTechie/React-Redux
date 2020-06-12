import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions/Auth";

class logout extends Component {
  componentDidMount() {
    this.props.logout();
  }
  render() {
    return (
      <div>
        <Redirect to="/login" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(logout);
