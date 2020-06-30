import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="name" checked={props.currentSort === "name"} onChange={props.setSort}/>
        Alphabetically 
      </label>
      <label>
        <input type="radio" value="price" checked={props.currentSort === "price"} onChange={props.setSort}/>
        Price 
      </label>
      <label>
        <input type="radio" value="none" checked={props.currentSort === "none"} onChange={props.setSort}/>
        None 
      </label>

      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.setFilter} value={props.currentFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
