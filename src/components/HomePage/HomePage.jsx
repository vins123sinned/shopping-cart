import { Link } from "react-router-dom";
import { Categories } from "../Categories/Categories.jsx";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="mainSection">
      <section className={styles.hero}>
        <Link to={"shop"} className={styles.heroLink}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>
              This is <span className={styles.logo}>VInSION</span>
            </h1>
            <p className={styles.para}>Discover the Summer 2025 Collection.</p>
          </div>
        </Link>
      </section>
      <Categories />
    </div>
  );
};

export { HomePage };
