import React from "react";
import { Link } from "react-router-dom";
const Header = ({ handleSearch }) => {
  return (
    <div className="header">
      <div className="left">
        <span className="icon-logo">
          <i class="fas fa-film"></i>
        </span>
        <Link to="/" className="link">
          Home Page
        </Link>
        <Link className="link">List Movie</Link>
      </div>
      <div className="right">
        <form className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              e.preventDefault();
              handleSearch(e.target.value);
            }}
          />
          <button type="submit" className="icon-search">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
