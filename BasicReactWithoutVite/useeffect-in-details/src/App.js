import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    // Don't do this
    document.body.onclick = () => {
      console.log(count); // this should be increasing in console also but it is not happening as expected.
    };
  }, [count]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setcount(count +1);
        }}
      >
        Increment
      </button>

      <div> count : {count}</div>
    </div>
  );
}

export default App;
