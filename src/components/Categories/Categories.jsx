import styles from "./Categories.module.css";

const Category = ({ children, category }) => {
  return <li className={styles[category]}>{children}</li>;
};

const Categories = () => {
  return (
    <section>
      <h2>Shop By Category</h2>
      <ul className={styles.categoriesList}>
        <Category category={"shoes"}>
          <h3>Shoes</h3>
        </Category>
        <Category category={"jewelry"}>
          <h3>Jewelry</h3>
        </Category>
        <Category category={"mensClothing"}>
          <h3>Men's Clothing</h3>
        </Category>
        <Category category={"womensClothing"}>
          <h3>Women's Clothing</h3>
        </Category>
      </ul>
    </section>
  );
};

export { Categories };
