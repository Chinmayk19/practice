import React, { useState } from "react";
import "./DropDown.css"
import { IoMdArrowDropdown } from "react-icons/io";


const Dropdown = ({ label, options, value, onChange }) => {
    const [focus,setFocus]=useState("0deg");
    function selectFocus(){
        setFocus("180deg")
    }
    function looseFocus(){
        setFocus("0deg")
    }
  return (
    <div className="search-container">
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="custom-select" onFocus={selectFocus} onBlur={looseFocus}>
        {options.map((option, index) => (
          <option key={index} value={option}> 
            {option}
          </option>
        ))}
      </select>
      <div className="dropdown-arrow" style={{transform:`rotate(${focus})`}}>
      <IoMdArrowDropdown />
      </div>
    </div>
  );
};

export default Dropdown;
