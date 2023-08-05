import React from "react";
import "./Filter.css";
import { AiOutlineFilter } from "react-icons/ai";

export const Filter = ({
  isDropdownOpen,
  setIsDropdownOpen,
  showOnlyImportant,
  handleFilterChange,
}) => {
  return (
    <div className="filter-dropdown">
      <div className="select-container">
        <div className="icon-container">
          <AiOutlineFilter
            className="filter-icon"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
        </div>

        <select
          className="select-box"
          value={showOnlyImportant}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option className="option" value={false}>Все</option>
          <option value={true}>Важные</option>
        </select>
      </div>
    </div>
  );
};
