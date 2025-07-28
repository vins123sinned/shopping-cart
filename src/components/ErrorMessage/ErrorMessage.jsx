import PropTypes from "prop-types";
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

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export { ErrorMessage };
