import styles from "./Attribution.module.css";

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

export { Attribution };
