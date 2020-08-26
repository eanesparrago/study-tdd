import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onDecrement = () => {
    if (counter === 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h1>This is counter app</h1>

      <div id="counter-value">{counter}</div>

      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>

      <button id="decrement-btn" onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
