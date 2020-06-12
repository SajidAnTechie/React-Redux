const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "Decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "Add":
      return {
        ...state,
        counter: state.counter + 5,
      };
    case "Subtract":
      return {
        ...state,
        counter: state.counter - 5,
      };
    case "store":
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          counter: state.counter,
        }),
      };
    case "Delete":
      const filterresult = state.results.filter(
        (res) => res.id !== action.reultId
      );

      return {
        ...state,
        results: filterresult,
      };
  }
  return state;
};
export default reducer;
