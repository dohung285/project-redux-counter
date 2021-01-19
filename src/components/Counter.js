import React from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE, RESET } from "./actions";

function Counter({ count, name, increment, decrement, reset }) {
  return (
    <div className="container">
      <div>
        <h1>{name}</h1>
        <p className="counter">{count}</p>
        <div className="buttons">
          <button type="button" className="btn" onClick={decrement}>
            decrease
          </button>
          <button type="button" className="btn" onClick={reset}>
            reset
          </button>
          <button type="button" className="btn" onClick={increment}>
            increase
          </button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps: ", state);
  return { count: state.count, name: state.name };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log("ownProps", ownProps);
  return {
    increment: () => dispatch({ type: INCREASE }),
    decrement: () => dispatch({ type: DECREASE }),
    reset: () => dispatch({ type: RESET }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
