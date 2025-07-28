import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { CartLink } from "../CartLink/CartLink";

const Navbar = ({ cart }) => {
  const [openCategories, setOpenCategories] = useState(false);

  // check media to show correct categories list
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1000px");

    const handleChange = (event) => setOpenCategories(event.matches);
    // initial check
    handleChange(mediaQuery);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const linkClicked = () => {
    const mediaQuery = window.matchMedia("(min-width: 1000px");
    if (!mediaQuery.matches) setOpenCategories(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <button
          type="button"
          className={styles.categoriesButton}
          onClick={() => setOpenCategories(!openCategories)}
          aria-label="Categories Menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <Link to="/" className={styles.logo}>
          VInSION
        </Link>
      </div>
      {openCategories && (
        <ul className={styles.categoriesList}>
          <li>
            <Link to="shop" onClick={linkClicked}>
              Products
            </Link>
          </li>
          <li>
            <Link to="shop/category/mens-clothing" onClick={linkClicked}>
              Men's Clothing
            </Link>
          </li>
          <li>
            <Link to="shop/category/womens-clothing" onClick={linkClicked}>
              Women's Clothing
            </Link>
          </li>
          <li>
            <Link to="shop/category/jewelry" onClick={linkClicked}>
              Jewelry
            </Link>
          </li>
          <li>
            <Link to="shop/category/electronics" onClick={linkClicked}>
              Electronics
            </Link>
          </li>
        </ul>
      )}
      <CartLink cart={cart} />
    </nav>
  );
};

export { Navbar };
