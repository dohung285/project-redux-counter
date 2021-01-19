import { DECREASE, INCREASE, RESET } from "./actions";

const defaulState = {
  count: 80,
  name: "bob",
};

export default function reducer(state = defaulState, action) {
  console.log({ state, action });
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === RESET) {
    return { ...state, count: 0 };
  }
  return state;
}
