import BookShow from './BookShow';
import BookContext from '../context/books'
import { useContext } from 'react';


function BookList(){

    const {books} = useContext(BookContext);

    const renderedBooks = books.map((book)=>{
        
        return <BookShow key={book.id} book={book} />;
    });
    return <div className='book-list'>

       {renderedBooks}
    </div>;
}
export default BookList;