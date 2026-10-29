import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? saved === "enabled" : true;
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.classList.toggle("light", !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`app_root ${isDarkMode ? "dark" : "light"}`}>
      {/* Ambient background glow atmosphere matching reference image */}
      <div className="ambient_glow glow_top" />
      <div className="ambient_glow glow_bottom" />

      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
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
