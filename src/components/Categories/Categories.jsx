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
          <p className={styles.cardAttribution}>
            Photo by{" "}
            <a
              href="https://www.pexels.com/photo/pair-of-brown-leather-shoes-2562992/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andre Moura
            </a>{" "}
            on Pexels
          </p>
        </Category>
        <Category category={"jewelry"}>
          <h3 className={styles.cardHeading}>Jewelry</h3>
          <p className={styles.cardAttribution}>
            Photo by{" "}
            <a
              href="https://www.pexels.com/photo/a-woman-wearing-silver-necklace-5475580/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Melikaa Tg
            </a>{" "}
            on Pexels
          </p>
        </Category>
        <Category category={"mensClothing"}>
          <h3 className={styles.cardHeading}>Men's Clothing</h3>
          <p className={styles.cardAttribution}>
            Photo by{" "}
            <a
              href="https://www.pexels.com/photo/man-in-yellow-vest-standing-with-hands-in-pockets-18695788/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Siarhei Nester
            </a>{" "}
            on Pexels
          </p>
        </Category>
        <Category category={"womensClothing"}>
          <h3 className={styles.cardHeading}>Women's Clothing</h3>
          <p className={styles.cardAttribution}>
            Photo by{" "}
            <a
              href="https://www.pexels.com/photo/elegant-woman-posing-in-bohemian-dress-by-blue-door-32919378/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dion Martins
            </a>{" "}
            on Pexels
          </p>
        </Category>
      </ul>
    </section>
  );
};

export { Categories };
