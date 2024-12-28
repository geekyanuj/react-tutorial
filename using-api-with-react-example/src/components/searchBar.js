import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = () => {
    onSubmit(term);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        value={term}
        placeholder="Search..."
      />
      <button onClick={handleFormSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;
