import React from "react";
import Counterresult from "./Components/Counterresult/Counterresult";
import Counter from "./Components/Counter/Counter";
import Person from "./Components/person/person";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboared from "./Components/Dashboared";
import Logout from "./Components/logout";
import { connect } from "react-redux";
import * as actions from "./Components/actions/counter";
import * as action from "./Components/actions/Auth";

class App extends React.Component {
  componentDidMount() {
    this.props.checkauth();
  }
  render() {
    let routes = (
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
    if (this.props.isauth) {
      routes = (
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashbored" component={Dashboared} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      );
    }
    return (
      <BrowserRouter>
        <Counterresult />
        <div style={style}>
          <Counter lable="Increment 1" click={this.props.onIncrement} />
          <Counter lable="Decrement 1" click={this.props.onDecrement} />
          <Counter lable="Add 5" click={this.props.onAdd} />
          <Counter lable="Subtract 5" click={this.props.onSubtract} />
        </div>
        <div style={stylebutton}>
          <button type="button" onClick={this.props.store}>
            Store
          </button>
          <ul>
            {this.props.rst.map((result, index) => {
              return (
                <li
                  key={index}
                  onClick={() => this.props.onDeleteResult(result.id)}
                >
                  {result.counter}
                </li>
              );
            })}
          </ul>
          <Person />
        </div>
        {routes}
      </BrowserRouter>
    );
  }
}
const mapStateToPorps = (state) => {
  return {
    ctr: state.ctr.counter,
    rst: state.ctr.results,
    isauth: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actions.Increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onAdd: () => dispatch(actions.add()),
    onSubtract: () => dispatch(actions.subtract()),
    store: () => dispatch(actions.storeResult()),
    onDeleteResult: (id) => dispatch(actions.deleteResult(id)),
    checkauth: () => dispatch(action.checkAuth()),
  };
};

const style = {
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  color: "White",
  marginTop: "20px",
};
const stylebutton = {
  textAlign: "center",
  marginTop: "35px",
};
export default connect(mapStateToPorps, mapDispatchToProps)(App);
