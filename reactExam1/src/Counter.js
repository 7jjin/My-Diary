import React, { useState } from "react";
import OddEventResult from "./OddEvenResult";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const ondecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={ondecrease}>-</button>
      <OddEventResult count={count} />
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
