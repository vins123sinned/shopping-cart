import styles from "./Attribution.module.css";
import PropTypes from "prop-types";

const Attribution = ({ photo, name, link }) => {
  return (
    <li className={styles.attribution}>
      {photo} Photo by{" "}
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>{" "}
      on Pexels
    </li>
  );
};

Attribution.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export { Attribution };
