import { actionTypes } from "./actions";

export const exampleInitialState = {
  counter: 0
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };

    default:
      return state;
  }
}

export default reducer;
