import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
    // Lazy intializer for complex operations (runs only once on mount)
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Navbar cart={cart} />
      <Outlet context={[cart, setCart]} />
      <Footer />
    </>
  );
}

export default App;
