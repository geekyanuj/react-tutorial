import { useState, useCallback } from "react";
import "./App.css";

const Counter = ({ increment }) => {
  console.log("counter rendered");
  return <button onClick={increment}>increment</button>;
};

function App() {
  const [counter, setcounter] = useState(0);

  // Using useCallback to memoize the increment function
  const increment = useCallback(
    //we have freeze/ prevented the conter to re-render
    () => {
      setcounter(counter + 1);
    },
    []
  ); // No dependencies, so this function will be memoized once

  return (
    <div className="App">
      <h3>{counter}</h3>
      <Counter increment={increment} />
    </div>
  );
}

export default App;
