// App.js
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import FoodOrder from "./FoodOrder";


function App() {
  return (
    <ThemeProvider>
      <FoodOrder />
      
    </ThemeProvider>
  );
}

export default App;
