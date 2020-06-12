import * as actionTypes from "./actionTypes";

export const addperson = (data) => {
  return {
    type: actionTypes.Addperson,
    personData: data,
  };
};
export const deleteperson = (id) => {
  return {
    type: actionTypes.Deleteperson,
    personId: id,
  };
};
