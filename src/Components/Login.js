import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../Components/actions/Auth";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    this.props.auth(this.state.username, this.state.password);
  };
  render() {
    let redirect = null;
    if (this.props.authState) {
      redirect = <Redirect to="/dashbored" />;
    }
    return (
      <div>
        {redirect}
        <form onSubmit={this.handlesubmit}>
          <input
            type="text"
            name="username"
            onChange={this.handlechange}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            onChange={this.handlechange}
            placeholder="password"
          />
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
}
const mapStateToPorps = (state) => {
  return {
    authState: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    auth: (username, password) => dispatch(actions.auth(username, password)),
  };
};
export default connect(mapStateToPorps, mapDispatchToProps)(Login);
