
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button primary={true} secondary>Click Me</Button>
      <Button outline={"sss"}>Search</Button>
      <Button danger success>Save</Button>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </div>
  );
}

export default App;
