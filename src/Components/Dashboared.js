import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dashboared extends Component {
  render() {
    return (
      <div>
        <h2>Dashbored</h2>
        <Link to="/logout">
          <button>Logout</button>
        </Link>
      </div>
    );
  }
}
