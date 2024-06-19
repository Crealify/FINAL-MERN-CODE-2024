import React, { useState, useCallback } from "react";

const Button = ({ handleClick, label }) => {
  console.log(`Rendering ${label}`);
  return <button onClick={handleClick}>{label}</button>;
};

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <div>Count: {count}</div>
      <Button handleClick={increment} label="Increment" />
    </div>
  );
};

export default App;
