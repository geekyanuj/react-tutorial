import { useState } from "react";
import "./BookCreate.css"

function BookCreate({onCreate}){

    const [title,setTitle]= useState('');

    const handleChange =(event)=>{
        setTitle(event.target.value);
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        onCreate(title); 
        setTitle('');
    };

    return <div className="book-create">
        <h4 className="heading">Add a Book</h4>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange}/>
            <button>Create</button>
        </form>
        
    </div>;
}
export default BookCreate;