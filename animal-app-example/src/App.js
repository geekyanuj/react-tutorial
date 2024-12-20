import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["cat", "cow", "gator", "horse", "dog", "bird"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]); // Initial state is an empty array
  const addAnimal = () => {
    setAnimals([...animals, getRandomAnimal()]); //add a random animal to the list, ...animals spreads the current animals array into the new array.
  };

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}></AnimalShow>;
  });

  return (
    <div className="App">
      <button onClick={addAnimal}>Add Animal</button>
      <div className="animal-list">{renderAnimals}</div> 
    </div>
  );
}

export default App;
