import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/person";

class person extends Component {
  state = {
    name: "",
    age: "",
  };
  onChangehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    const data = {
      id: new Date(),
      name: this.state.name,
      age: this.state.age,
    };
    this.props.add(data);
    this.setState({ name: "", age: "" });
  };
  render() {
    console.log(this.props.resultperson);
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={this.onChangehandler}
          />
          <br />
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="age"
            onChange={this.onChangehandler}
          />
          <br />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.props.resultperson.map((personData) => {
            return (
              <div
                key={personData.id}
                onClick={() => this.props.deleteperson(personData.id)}
              >
                <h4>Name: {personData.name}</h4>
                <h4>Age: {personData.age}</h4>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resultperson: state.prs.persons,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: (data) => dispatch(actions.addperson(data)),
    deleteperson: (id) => dispatch(actions.deleteperson(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(person);
