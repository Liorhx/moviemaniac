import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

const THEME_STORAGE_KEY = "moviemaniac_theme_mode";

const App = () => {
  // Always default to DARK MODE unless user explicitly chose light
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === "light") return false;
      return true; // Default dark
    } catch (_) {
      return true;
    }
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
      } catch (_) {}
      return next;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`app_root ${isDarkMode ? "dark" : "light"}`}>
      {/* Ambient background glow atmosphere matching reference image */}
      <div className="ambient_glow glow_top" />
      <div className="ambient_glow glow_bottom" />

      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={handleToggleTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="main_content">
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                type="trending"
                title="Trending Now"
                searchQuery={searchQuery}
              />
            }
          />

          <Route
            path="/popular"
            element={
              <MovieList
                type="popular"
                title="Popular Movies"
                searchQuery={searchQuery}
              />
            }
          />

          <Route
            path="/top_rated"
            element={
              <MovieList
                type="top_rated"
                title="Top Rated Movies"
                searchQuery={searchQuery}
              />
            }
          />

          <Route
            path="/upcoming"
            element={
              <MovieList
                type="upcoming"
                title="Upcoming Releases"
                searchQuery={searchQuery}
              />
            }
          />

          <Route
            path="/my_list"
            element={
              <MovieList
                type="top_rated"
                title="My List"
                searchQuery={searchQuery}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
