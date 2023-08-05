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
      <AiOutlineFilter
        className="filter-icon"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      {isDropdownOpen && (
        <select
          id="filter-select"
          className={`filter-select ${
            showOnlyImportant ? "custom-select" : ""
          }`}
          value={showOnlyImportant}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value={false}>All</option>
          <option value={true}>Important</option>
        </select>
      )}
    </div>
  );
};
