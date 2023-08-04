import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import projectLogo from "../../assets/project-logo.svg";
import "./Header.css";

const Header = ({ showSearch, text, setText, handleSearch, setShowSearch, }) => {
  return (
    <header className="notes__header">
      <img src={projectLogo} className="header__logo" />
      {!showSearch && <h2 className="header__title">QuickNote</h2>}
      {showSearch && (
        <input
          className="header__input"
          value={text}
          autoFocus
          type="text"
          placeholder="Type something..."
          onChange={(e) => {
            setText(e.target.value);
            handleSearch();
          }}
        />
      )}
      <button
        className="button"
        onClick={() => setShowSearch((prevState) => !prevState)}
      >
        {!showSearch ? <CiSearch /> : <MdClose />}
      </button>
    </header>
  );
};

export default Header;
