import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit({book,onSubmit}){
    const [title,setTitle] = useState(book.title);

    const {editBookById} = useContext(BooksContext);

    const handleTitleChange = (event)=>{
        setTitle(event.target.value);
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        onSubmit();
        editBookById(book.id,title)
    };
    return <div>
        <form className="book-edit" onSubmit={handleSubmit}>
            <label id="title">Title</label>
            <input className="input" value={title} onChange={handleTitleChange} />
            <button className="button is-primary" >
                Save
            </button>
        </form>
    </div>;
}
export default BookEdit;