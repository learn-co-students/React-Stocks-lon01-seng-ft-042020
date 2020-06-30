import React from 'react';

const SearchBar = props => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name="sort" checked={props.sorted === "Alphabetically"} onChange={(e) => props.changeSort(e)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="sort" checked={props.sorted === "Price"} onChange={(e) => props.changeSort(e)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.changeFilter(e)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
