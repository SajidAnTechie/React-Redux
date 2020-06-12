import * as actionTypes from "./actionTypes";

export const Increment = () => {
  return {
    type: actionTypes.Increment,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.Decrement,
  };
};

export const add = () => {
  return {
    type: actionTypes.Add,
  };
};
export const subtract = () => {
  return {
    type: actionTypes.Subtract,
  };
};

export const storeResult = () => {
  return {
    type: actionTypes.Store,
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.Delete,
    reultId: id,
  };
};
