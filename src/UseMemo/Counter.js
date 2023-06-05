import React, { useState, useMemo } from "react";

function Counter() {
  const [CounterOne, setCounterOne] = useState(0);
  const [CounterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(CounterOne + 1);
  };
  const IncrementTwo = () => {
    setCounterTwo(CounterTwo + 1);
  };

  const isEven = useMemo(() => {
    return CounterOne % 2 === 0;
  }, [CounterOne]);

  return (
    <div>
      <button onClick={IncrementOne}>Count One- {CounterOne}</button>
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={IncrementTwo}>Count Two- {CounterTwo}</button>
    </div>
  );
}
export default Counter;
