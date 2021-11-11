/** @format */

import React from "react";

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      className="SearchBar"
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchInput;
