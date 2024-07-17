import React from "react";
import "./SearchForm.css";
import Dropdown from "../DropDown/DropDown";

const SearchForm = ({
  origins,
  destinations,
  cabins,
  origin,
  setOrigin,
  destination,
  setDestination,
  cabinSelection,
  setCabinSelection,
  handleSearch,
}) => {
  return (
    <div>
      <Dropdown
        label="Origin:"
        options={origins}
        value={origin}
        onChange={setOrigin}
      />
      <Dropdown
        label="Destination:"
        options={destinations}
        value={destination}
        onChange={setDestination}
      />
      <Dropdown
        label="Cabin Selection:"
        options={cabins}
        value={cabinSelection}
        onChange={setCabinSelection}
      />
      <button onClick={handleSearch} className="search-btn">Search</button>
    </div>
  );
};

export default SearchForm;
