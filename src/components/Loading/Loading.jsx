import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer} aria-live="polite">
      <div className={styles.loadingContent}>
        <div className={styles.spinner} data-testid="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export { Loading };
