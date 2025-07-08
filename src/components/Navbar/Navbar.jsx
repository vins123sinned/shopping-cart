import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [openCategories, setOpenCategories] = useState(false);

  // check media to show correct categories list
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 900px");

    const handleChange = (event) => setOpenCategories(event.matches);
    // initial check
    handleChange(mediaQuery);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setOpenCategories(!openCategories)}
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
        </ul>
      )}
      <Link to="" className={styles.cartLink}>
        <span className="material-symbols-outlined">shopping_cart</span>
        Cart
      </Link>
    </nav>
  );
};

export { Navbar };
