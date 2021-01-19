import "./App.css";
import Counter from "./components/Counter";
import { createStore } from "redux";
import { DECREASE, INCREASE, RESET } from "./components/actions";
import reducer from "./components/reducer";
import { Provider } from "react-redux";

//setup initial state
const defaulState = {
  count: 80,
  name: "Hung",
};

//setup reducer

//setup store
const store = createStore(reducer, defaulState);

// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: RESET });
//console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter random="random value" />
      </div>
    </Provider>
  );
}

export default App;
