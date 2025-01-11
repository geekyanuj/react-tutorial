import { useState } from "react";

function BookCreate({onCreate}){

    const [title,setTitle]= useState('');

    const handleChange =(event)=>{
        setTitle(event.target.value);
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        onCreate(title);
    };
    return <div>
        <form>
            <label>title</label>
            <input value={title} onChange={handleChange}/>
            <button>Create</button>
        </form>
        Book Create
    </div>;
}
export default BookCreate;