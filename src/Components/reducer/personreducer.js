const initialState = {
  persons: [],
};

const personreducer = (state = initialState, action) => {
  if (action.type === "AddPerson") {
    return {
      ...state,
      persons: [...state.persons, action.personData],
    };
  }
  if (action.type === "Deleteperson") {
    const filterData = state.persons.filter(
      (per) => per.id !== action.personId
    );
    return {
      ...state,
      persons: filterData,
    };
  }

  return state;
};
export default personreducer;
