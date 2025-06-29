import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import "./App.css";

import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Fire from "./assets/icons8-fire-48.png";
import Star from "./assets/icons8-star-100.png";
import Upcoming from "./assets/icons8-upcoming-64.png";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "disabled"
  );

  return (
    <div className={`toggle-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="app ">
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList type="popular" title="Popular" emoji={Fire} />
              }
            />

            <Route
              path="/top_rated"
              element={
                <MovieList type="top_rated" title="Top Rated" emoji={Star} />
              }
            />

            <Route
              path="/upcoming"
              element={
                <MovieList type="upcoming" title="Upcoming" emoji={Upcoming} />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
