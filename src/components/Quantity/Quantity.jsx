import { useOutletContext } from "react-router-dom";
import styles from "./Quantity.module.css";

const Quantity = ({ quantity, setQuantity, id }) => {
  const [cart, setCart] = useOutletContext();
  const minQuantity = 0;
  const maxQuantity = 100;

  const handleChange = (event) => {
    const value = event.target.value;

    if (value === "")
      return setQuantity
        ? setQuantity(0)
        : setCart(
            cart.map((item) =>
              item.id === id ? { ...item, quantity: "0" } : item,
            ),
          );
    // check if invalid character is typed
    if (!/^\d+$/.test(value)) return;

    const cleanedValue = value.replace(/^0+(?!$)/, "");
    if (Number(cleanedValue) <= maxQuantity) {
      setQuantity
        ? setQuantity(cleanedValue)
        : setCart(
            cart.map((item) =>
              item.id === id ? { ...item, quantity: cleanedValue } : item,
            ),
          );
    }
  };

  const handleBlur = () => {
    if (quantity === "0" && id)
      return setCart(cart.filter((item) => item.id !== id));
  };

  const subtractQuantity = () => {
    const newValue = Number(quantity) - 1;
    if (newValue < minQuantity) return;

    if (newValue === 0 && id)
      return setCart(cart.filter((item) => item.id !== id));

    setQuantity
      ? setQuantity(newValue)
      : setCart(
          cart.map((item) =>
            item.id === id ? { ...item, quantity: newValue } : item,
          ),
        );
  };

  const addQuantity = () => {
    const newValue = Number(quantity) + 1;
    if (newValue > maxQuantity) return;

    setQuantity
      ? setQuantity(newValue)
      : setCart(
          cart.map((item) =>
            item.id === id ? { ...item, quantity: newValue } : item,
          ),
        );
  };

  return (
    <>
      <label htmlFor="quantity" className={styles.quantityLabel}>
        Quantity
      </label>
      <div className={styles.quantityContainer}>
        <button
          type="button"
          onClick={subtractQuantity}
          aria-label="Decrease quantity"
          className={styles.quantityButton}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            remove
          </span>
        </button>
        <input
          type="text"
          id="quantity"
          min="0"
          max={maxQuantity}
          value={quantity}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.quantityInput}
        />
        <button
          type="button"
          onClick={addQuantity}
          aria-label="Increase quantity"
          className={styles.quantityButton}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            add
          </span>
        </button>
      </div>
    </>
  );
};

export { Quantity };
