import { useEffect, useState } from "react";
import "./Checkbox.css"; // Add styles in a separate CSS file

const Checkbox = ({ setIsDarkMode, isDarkMode }) => {
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode ? "disabled" : "enabled");
  };

  return (
    <div>
      <input
        type="checkbox"
        id="toggle"
        className="toggle-checkbox"
        onChange={toggleMode}
        checked={isDarkMode}
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="icon">{isDarkMode ? "🌙" : "🌞"}</span>
      </label>
    </div>
  );
};

export default Checkbox;
