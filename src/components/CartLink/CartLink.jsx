import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";

const CartLink = ({ cart }) => {
  const itemCountRef = useRef();
  const itemCount = cart.reduce(
    (itemCount, item) => itemCount + Number(item.quantity),
    0,
  );

  useEffect(() => {
    const element = itemCountRef.current;
    if (!element) return;

    element.classList.remove(styles.pulse);
    // Reflows document to restart animation
    void element.offsetWidth;
    element.classList.add(styles.pulse);

    const timeout = setTimeout(() => {
      element.classList.remove(styles.pulse);
    }, 300);

    return () => clearTimeout(timeout);
  }, [cart]);

  return (
    <Link
      to="cart"
      className={styles.cartLink}
      aria-label={`Cart with ${itemCount} item${itemCount > 1 ? "s" : ""}`}
    >
      <div className={styles.iconContainer}>
        <span className="material-symbols-outlined" aria-hidden="true">
          shopping_cart
        </span>
        <span className={styles.itemCount} ref={itemCountRef}>
          {itemCount < 100 ? itemCount : "99+"}
        </span>
      </div>
      Cart
    </Link>
  );
};

export { CartLink };
