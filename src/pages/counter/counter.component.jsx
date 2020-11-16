import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../../redux/counter/counter.action";

const CounterPage = ({ count, increment, decrement }) => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <div>{count}</div>
      <div>{number}</div>
      <input
        type="number"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <button onClick={() => increment(number)}>increment</button>
      <button onClick={() => decrement(number)}>decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch(increment(number)),
  decrement: (number) => dispatch(decrement(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
