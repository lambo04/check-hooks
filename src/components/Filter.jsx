import React from 'react';
import "../App.css"


const Filter = ({ filterTitle, setFilterTitle }) => {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
      />
    </div>
  );
};

export default Filter;
