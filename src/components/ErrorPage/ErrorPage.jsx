import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <>
      <section className={styles.errorSection}>
        <Link to="/" className={styles.logo}>
          VInSION
        </Link>
        <h1>Page does not exist</h1>
        <p>The page you are trying to visit does not exist.</p>
        <Link to="/" className={styles.homeLink}>
          Home
        </Link>
      </section>
    </>
  );
};

export { ErrorPage };
