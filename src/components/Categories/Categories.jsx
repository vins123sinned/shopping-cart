import styles from "./Categories.module.css";

const Category = ({ children, category }) => {
  return (
    <li className={styles[category]}>
      <div className={styles.cardText}>{children}</div>
    </li>
  );
};

const Categories = () => {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categorySectionHeading}>Shop By Category</h2>
      <ul className={styles.categoriesList}>
        <Category category={"shoes"}>
          <h3 className={styles.cardHeading}>Shoes</h3>
        </Category>
        <Category category={"jewelry"}>
          <h3 className={styles.cardHeading}>Jewelry</h3>
        </Category>
        <Category category={"mensClothing"}>
          <h3 className={styles.cardHeading}>Men's Clothing</h3>
        </Category>
        <Category category={"womensClothing"}>
          <h3 className={styles.cardHeading}>Women's Clothing</h3>
        </Category>
      </ul>
    </section>
  );
};

export { Categories };
