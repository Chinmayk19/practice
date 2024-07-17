import React, { useState, useRef } from "react";
import "./DropDown.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focus, setFocus] = useState("0deg");
  const dropdownRef = useRef(null);

  const handleInputClick = () => {
    setIsOpen(!isOpen);
    setFocus(isOpen ? "0deg" : "180deg");
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
    setFocus("0deg");
  };

  const handleBlur = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
      setFocus("0deg");
    }
  };

  return (
    <div className="search-container" ref={dropdownRef}>
      <label>{label}</label>
      <div className="custom-select-wrapper">
        <input
          type="text"
          value={value}
          readOnly
          className="custom-select-input"
          onClick={handleInputClick}
          onBlur={handleBlur}
        />
        <div
          className="dropdown-arrow"
          style={{ transform: `rotate(${focus})` }}
        >
          <IoMdArrowDropdown />
        </div>
      </div>
      {isOpen && (
        <ul className="custom-select-options">
          {options.map((option, index) => (
            <li
              key={index}
              className="custom-select-option"
              onMouseDown={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
