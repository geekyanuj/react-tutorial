import { useState } from "react";

function App() {
  const [count,setCount]=useState(0);
  const handleClick=()=>{
    setCount(count+1);
  };
  return (
    <div className="App">
      <label>{count}</label>
      <button onClick={handleClick}>Add Count</button>
    </div>
  );
}

export default App;
