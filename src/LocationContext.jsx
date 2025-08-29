// LocationContext.js
import { createContext, useState } from "react";

export const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [location, setLocation] = useState("Delhi");

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
