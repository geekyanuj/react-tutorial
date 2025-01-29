import { useState } from "react";

function BookEdit({book}){
    const [title,setTitle] = useState(book.title);

    const handleTitleChange = (event)=>{
        setTitle(event.target.value);
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
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