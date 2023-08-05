import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";
import projectLogo from "../../assets/project-logo.svg";

import "./Header.css";

const Header = ({ showSearch, text, setText, setShowSearch }) => {
  const handleClick = () => {
    setShowSearch((prevState) => !prevState);
  };

  return (
    <header className="notes__header">
      <a href="https://github.com/DayTroy/quicknote" target="_blank">
        <img src={projectLogo} className="header__logo" />
      </a>
      <div className="header-wrapper">
        <Link to={"/create-note"} className="button add__button">
          <TfiWrite />
        </Link>
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
            }}
          />
        )}
        <button className="button button__search" onClick={handleClick}>
          {!showSearch ? <CiSearch /> : <MdClose />}
        </button>
      </div>
    </header>
  );
};

export default Header;
