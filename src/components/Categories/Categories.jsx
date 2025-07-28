import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const Category = ({ children, category, endpoint }) => {
  return (
    <li className={styles[category]}>
      <Link to={`/shop/category/${endpoint}`} className={styles.categoryLink}>
        <div className={styles.cardText}>{children}</div>
      </Link>
    </li>
  );
};

const Categories = () => {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categorySectionHeading}>Shop By Category</h2>
      <ul className={styles.categoriesList}>
        <Category category={"electronics"} endpoint={"electronics"}>
          <h3 className={styles.cardHeading}>Electronics</h3>
        </Category>
        <Category category={"jewelry"} endpoint={"jewelry"}>
          <h3 className={styles.cardHeading}>Jewelry</h3>
        </Category>
        <Category category={"mensClothing"} endpoint={"mens-clothing"}>
          <h3 className={styles.cardHeading}>Men's Clothing</h3>
        </Category>
        <Category category={"womensClothing"} endpoint={"womens-clothing"}>
          <h3 className={styles.cardHeading}>Women's Clothing</h3>
        </Category>
      </ul>
    </section>
  );
};

export { Categories };
