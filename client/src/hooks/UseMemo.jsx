import React, { useMemo, useState } from "react";

const ExpensiveCalculation = ({ num }) => {
  const calculate = (num) => {
    console.log("Calculating...");
    return num * 2;
  };

  const result = useMemo(() => calculate(num), [num]);

  return <div>Result: {result}</div>;
};

const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <ExpensiveCalculation num={number} />
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
};

export default App;
