import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Search, Film, Sun, Moon, User, Menu, X, Flame, Star, Sparkles, Film as MovieIcon } from "lucide-react";

const Navbar = ({ isDarkMode, toggleTheme, searchQuery, setSearchQuery }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar_header">
      <div className="navbar_container">
        {/* Left: Brand Logo */}
        <div className="navbar_left">
          <NavLink to="/" className="brand_logo" onClick={closeMobileMenu}>
            <div className="logo_icon_wrapper">
              <Film className="logo_film_icon" size={22} />
            </div>
            <span className="brand_text">
              <span className="brand_movie">Movie</span>
              <span className="brand_maniac">Maniac</span>
            </span>
          </NavLink>
        </div>

        {/* Middle: Sleek Search Bar (Desktop) */}
        <div className="navbar_center">
          <form className="search_bar_form" onSubmit={handleSearchSubmit}>
            <Search size={17} className="search_icon" />
            <input
              type="text"
              className="search_input"
              placeholder="Search movies, actors, directors..."
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search movies"
            />
            {searchQuery && (
              <button
                type="button"
                className="search_clear_btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </form>
        </div>

        {/* Right Section: Navigation Links & Mobile Controls */}
        <div className="navbar_right">
          <nav className="desktop_nav_links">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav_link active" : "nav_link"
              }
            >
              Browse
            </NavLink>
            <NavLink
              to="/top_rated"
              className={({ isActive }) =>
                isActive ? "nav_link active" : "nav_link"
              }
            >
              Top Rated
            </NavLink>
            <NavLink
              to="/upcoming"
              className={({ isActive }) =>
                isActive ? "nav_link active" : "nav_link"
              }
            >
              Upcoming
            </NavLink>
            <NavLink
              to="/my_list"
              className={({ isActive }) =>
                isActive ? "nav_link active" : "nav_link"
              }
            >
              My List
            </NavLink>
          </nav>

          {/* Theme Toggle Pill (ALWAYS VISIBLE ON BOTH DESKTOP AND MOBILE) */}
          <button
            type="button"
            className={`theme_toggle_capsule ${isDarkMode ? "is_dark" : "is_light"}`}
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div className="theme_icon sun_icon">
              <Sun size={13} />
            </div>
            <div className="theme_icon moon_icon">
              <Moon size={13} />
            </div>
            <div className="theme_toggle_thumb" />
          </button>



          {/* Mobile Buttons: Search & Hamburger */}
          <div className="mobile_control_buttons">
            <button
              type="button"
              className="mobile_icon_btn"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              aria-label="Toggle mobile search"
            >
              <Search size={19} />
            </button>

          </div>
        </div>
      </div>

      {/* Expandable Mobile Search */}
      {mobileSearchOpen && (
        <div className="mobile_search_bar">
          <form className="search_bar_form mobile_form" onSubmit={handleSearchSubmit}>
            <Search size={16} className="search_icon" />
            <input
              type="text"
              className="search_input"
              placeholder="Search movies, actors, directors..."
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />

          </form>
        </div>
      )}


    </header>
  );
};

export default Navbar;
