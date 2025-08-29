import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function FoodOrder() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [offers, setOffers] = useState([]);
  const [location, setLocation] = useState("Delhi");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    console.log("Fetching restaurants for", location);
    setRestaurants([`${location} Pizza Point`, `${location} Biryani House`]);
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("🔄 Live updates running...");
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Practise to Showcase useEffect + useContext + Framer Motion</h1>

      {/* Animated Toggle Button */}
      <div
        onClick={toggleTheme}
        style={{
          width: 100,
          height: 50,
          backgroundColor: "rgba(66, 153, 225, 0.2)",
          borderRadius: 50,
          cursor: "pointer",
          display: "flex",
          padding: 5,
          justifyContent: theme === "light" ? "flex-start" : "flex-end",
          alignItems: "center",
        }}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          style={{
            width: 40,
            height: 40,
            backgroundColor: "rgba(66, 103, 225, 1)",
            borderRadius: "50%",
          }}
        />
      </div>

      <h2>🔥 Offers: {offers.join(", ")}</h2>
      <h3>📍 Location: {location}</h3>
      <button onClick={() => setLocation("Mumbai")}>Go to Mumbai</button>
      <button onClick={() => setLocation("Bangalore")}>Go to Bangalore</button>

      <h3>🍴 Restaurants:</h3>
      <ul>
        {restaurants.map((res, i) => (
          <li key={i}>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default FoodOrder;
