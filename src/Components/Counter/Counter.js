import React from "react";

const counter = (props) => {
  const style = {
    width: "100px",
    height: "30px",
    backgroundColor: "#fff",
    color: "black",
  };
  return (
    <button type="button" style={style} onClick={props.click}>
      {props.lable}
    </button>
  );
};

export default counter;
