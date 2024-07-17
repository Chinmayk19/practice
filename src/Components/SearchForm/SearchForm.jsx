import React from "react";
import "./SearchForm.css"
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
      <div className="search-container">
        <label>Origin:</label>
        <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="custom-select">
          {origins.map((originOption, index) => (
            <option key={index} value={originOption}>
              {originOption}
            </option>
          ))}
        </select>
      </div>
      <div className="search-container">
        <label>Destination: </label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="custom-select"
        >
          {destinations.map((destinationOption, index) => (
            <option key={index} value={destinationOption}>
              {destinationOption}
            </option>
          ))}
        </select>
      </div>
      <div className="search-container">
        <label>Cabin Selection:</label>
        <select
          value={cabinSelection}
          onChange={(e) => setCabinSelection(e.target.value)}
          className="custom-select"
        >
          {cabins.map((cabinOption, index) => (
            <option key={index} value={cabinOption} style={{width:"100%",border:"none",padding:'100px'}}>
              {cabinOption}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSearch} className="search-btn">Search</button>
    </div>
  );
};

export default SearchForm;
