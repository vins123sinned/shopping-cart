import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./App.css";
import { Products } from "./components/Products/Products.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Products category={"All Products"} />
      <Footer />
    </>
  );
}

export default App;
