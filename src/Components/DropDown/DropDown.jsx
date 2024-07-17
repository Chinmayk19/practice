import React from "react";
import "./DropDown.css"
import { IoMdArrowDropdown } from "react-icons/io";


const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="search-container">
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="custom-select">
        {options.map((option, index) => (
          <option key={index} value={option}> 
            {option}
          </option>
        ))}
      </select>
      <div className="dropdown-arrow">
      <IoMdArrowDropdown />
      </div>
    </div>
  );
};

export default Dropdown;
