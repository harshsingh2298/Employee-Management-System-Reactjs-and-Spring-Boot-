import { useState } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);
  const initialSatate = 0;
  const Increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    setCounter(counter - 1);
  };
  const Reset = () => {
    setCounter(initialSatate);
  };
  return [counter, Increment, Decrement, Reset];
}
export default useCounter;
