import './App.css';
import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

  const [books,setBooks] = useState([]);

  const deleteBookById = (id)=>{
    const updatedBooks = books.filter((book)=>{
      return book.id !==id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = (id,newTitle)=>{
    const updatedBooks = books.map((book)=>{
      if(book.id ===id){
        return {...book,title:newTitle};
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const createBook =(title)=>{
    const updatedBooks = [
          ...books,
          {id:Math.round(Math.random()*9999),title:title}
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <h4>Book App</h4>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook}></BookCreate>
   </div> 
  );
}

export default App;
