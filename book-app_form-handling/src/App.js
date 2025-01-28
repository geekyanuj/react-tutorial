import './App.css';
import {useState} from 'react';
import BookCreate from './components/BookCreate';

function App() {

  const [books,setBooks]=useState([]);

  const createBook =(title)=>{
    console.log('create a book with title:',title);
    
  };

  return (
    <div className="App">
      <h4>Book App</h4>
      <BookCreate onCreate={createBook}></BookCreate>
   </div> 
  );
}

export default App;
