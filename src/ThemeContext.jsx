// ThemeContext.js
import { createContext, useState } from "react";

// Create a context for theme management
export const ThemeContext = createContext();

// ThemeProvider component to wrap the app and provide theme state
export function ThemeProvider({ children }) {
  
  // State to hold the current theme, default is 'light'
  const [theme, setTheme] = useState("light");

  // Function to toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // Provide theme and toggleTheme function to children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
