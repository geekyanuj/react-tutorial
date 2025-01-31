import './App.css';
import {useEffect, useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

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

  const createBook = async (title)=>{
    const response = await axios.post('http://localhost:3001/books',{
      title:title
    });

    const updatedBooks = [...books, response.data]; //added end of the array new book
    setBooks(updatedBooks);
    
    //this code is for without external DB
  //   const updatedBooks = [
  //         ...books,
  //         {id:Math.round(Math.random()*9999),title:title}
  //   ];
  //   setBooks(updatedBooks);
  };

  const fetchBooks = async ()=>{
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  useEffect(()={
    fetchBooks();
  },[]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook}></BookCreate>
   </div> 
  );
}

export default App;
