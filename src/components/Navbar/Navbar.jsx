import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">VInSION</Link>
        </li>
        <li>
          <Link to="">Men's Clothing</Link>
        </li>
        <li>
          <Link to="">Women's Clothing</Link>
        </li>
        <li>
          <Link to="">Jewelry</Link>
        </li>
        <li>
          <Link to="">Electronics</Link>
        </li>
        <li>
          <Link to="">
            <span className="material-symbols-outlined">shopping_cart</span>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
