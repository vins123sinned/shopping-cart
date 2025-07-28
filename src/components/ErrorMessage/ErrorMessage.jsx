import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorText}>
        <p>Encountered an error:</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export { ErrorMessage };
