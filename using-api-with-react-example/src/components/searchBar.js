import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  return (
    <div className="search-bar">
      <form>
        <input
          type="text"
          onChange={handleInputChange}
          value={term}
          placeholder="Search..."
        />
        <button onClick={handleFormSubmit}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
