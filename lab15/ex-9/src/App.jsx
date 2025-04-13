import React, { createContext, useContext, useState } from "react";

// Create a theme context
const ThemeContext = createContext();

// Theme provider component
function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to use the theme context
function useTheme() {
  return useContext(ThemeContext);
}

// Component that uses the theme
function ThemedComponent() {
  const { darkMode, toggleTheme } = useTheme();

  const themeStyles = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#333",
    padding: "20px",
    transition: "all 0.3s ease",
  };
  return (
    <div style={themeStyles}>
      <h2>Themed Component</h2>
      <p>This component uses the current theme from context.</p>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
// App component that wraps everything with the theme provider
function ThemeApp() {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Context Demo</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default ThemeApp;

