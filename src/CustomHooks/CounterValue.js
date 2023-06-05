import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

function CounterValue(count) {
  const [counter, Increment, Decrement, Reset] = useCounter();
  return (
    <div>
      <h1>Count - {counter}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
export default CounterValue;
