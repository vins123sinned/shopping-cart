import { useEffect, useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./App.css";

const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
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
      <ScrollToTop />
      <Navbar cart={cart} />
      <Outlet context={[cart, setCart]} />
      <Footer />
    </>
  );
};

export default App;
