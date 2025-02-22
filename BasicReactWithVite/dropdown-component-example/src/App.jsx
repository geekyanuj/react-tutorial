
import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {

  const [selection, setSelection] = useState("Select...");

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
    { label: "Yellow", value: "yellow" },
  ];

  const handleSelection = (option)=>{
    setSelection(option);
    console.log(option.value);//printing to check the workingness 
    
    
  }

  return (
    <div>
      <h2 className="p-2 font-bold">Dropdown Example</h2>
      <div className="p-2 border w-60 h-50">
        <Dropdown options={options} value={selection} onChange={handleSelection}/>
      </div>
    </div>
  );
}

export default App;


//this will take three params value which we assign with state, onChange means what we give in return and options a list of objects