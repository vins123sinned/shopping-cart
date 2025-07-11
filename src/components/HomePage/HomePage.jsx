import { Categories } from "../Categories/Categories.jsx";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            This is <span className={styles.logo}>VInSION</span>
          </h1>
          <p className={styles.para}>Discover the Summer 2025 Collection.</p>
        </div>
      </section>
      <Categories />
    </>
  );
};

export { HomePage };
