import React from "react";
import { connect } from "react-redux";

const counterresult = (props) => {
  const style = {
    backgroundColor: "red",
    textaligh: "center",
    width: "100%",
    height: "125px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px",
    fontWeight: "900",
    color: "White",
  };
  return <div style={style}>Store :{props.ctr}</div>;
};
const mapStateToPorps = (state) => {
  return {
    ctr: state.ctr.counter,
  };
};
export default connect(mapStateToPorps)(counterresult);
