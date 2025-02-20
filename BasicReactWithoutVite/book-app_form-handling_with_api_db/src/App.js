import './App.css';
import {useEffect, useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {

  const [books,setBooks] = useState([]);

  //fetching all books from db
  const fetchBooks = async ()=>{
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  useEffect(()=>{
    fetchBooks();
  },[]);

//creating a book
  const createBook = async (title)=>{
    const response = await axios.post('http://localhost:3001/books',{
      title:title
    });

    const updatedBooks = [...books, response.data]; //added end of the array new book //The existing books array is spread into a new array.The response.data (newly created book) is added to the end of this new array.
    setBooks(updatedBooks);
    
  };

 //updating a book
  const editBookById = async (id,newTitle)=>{
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title : newTitle
    });
    const updatedBooks = books.map((book)=>{
      if(book.id ===id){     //If the current book’s id matches the id passed to the function:// It returns a new book object, merging (...book) the existing book properties with the updated book data from the response (...response.data).
        return {...book,...response.data}; //do not directly update the title instead ...response.data which is updated book objec that came from API
      }
      return book; //if the book's id does not match, it remains unchanged in the new array.
    });
    setBooks(updatedBooks);
  };

  //deleting a book
  const deleteBookById = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      const updatedBooks = books.filter((book) => { 
        return book.id !== id; //.filter() creates a new array that excludes the book with the given id
      });
      setBooks(updatedBooks);
    } catch (error) {
      console.log(error);
      
      alert("Could not deleted...");
    }
  };

  

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook}></BookCreate>
   </div> 
  );
}

export default App;
