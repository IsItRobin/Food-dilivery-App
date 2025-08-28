import { useState, useEffect } from "react";

function FoodOrder() {
    const [offers,setoffers] = useState([]);
    const [location, setLocation] = useState("delhi");
    const [restaurants, setRestaurants] = useState([]);
// run once
    useEffect(() => {
        setoffers(["50% off", "Buy 1 Get 1 Free", "Free Delivery"]);
    }, []);
    useEffect(() => {
        console.log("Fetching restaurants for", location);
        setRestaurants([`${location} Pizza Point`, `${location} Biryani House`]);
    }, [location]);

    // cleanup
    useEffect(() => {
        const interval =setInterval(()=>{
            console.log("🔄 Live updates running...");
    }, 2000);

    return ()=>clearInterval(interval);
    },[]);

   return (
    <div>
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

export default FoodOrder;export default FoodOrder;