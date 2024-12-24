import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    onSubmit(query);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        value={query}
        placeholder="Search..."
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
