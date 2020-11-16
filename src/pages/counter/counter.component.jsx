import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../../redux/counter/counter.action";

const CounterPage = ({ count, countChanges, increment, decrement }) => {
  const [number, setNumber] = useState(1);

  // const handleOnChange = (event) => {
  // const num = event.target.valueAsNumber;

  //   if (isNaN(num)) {
  //     setNumber(0);
  //   } else {
  //     setNumber(num);
  //   }
  // };

  const handleOnClick = (func) => (num) => {
    if (isNaN(num)) {
      return () => func(0);
    } else {
      return () => func(num);
    }
  };

  return (
    <div>
      <div>{count}</div>
      <div>{number}</div>
      <div>Counter clicked: {countChanges}</div>
      <input
        type="number"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <button onClick={handleOnClick(increment)(number)}>increment</button>
      <button onClick={handleOnClick(decrement)(number)}>decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
  countChanges: state.counter.countChanges,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch(increment(number)),
  decrement: (number) => dispatch(decrement(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
