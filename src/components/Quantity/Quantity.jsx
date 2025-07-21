import styles from "./Quantity.module.css";

const Quantity = ({ quantity, setQuantity }) => {
  // when already in cart, update button to update cart!
  const minQuantity = 0;
  const maxQuantity = 100;

  const handleChange = (event) => {
    const value = event.target.value;

    if (value === "") return setQuantity(0);
    if (!/^\d+$/.test(value)) return;

    if (Number(value) <= maxQuantity) {
      const cleanedValue = value.replace(/^0+(?!$)/, "");
      setQuantity(cleanedValue);
    }
  };

  const subtractQuantity = () => {
    const newValue = Number(quantity) - 1;
    if (newValue < minQuantity) return;

    setQuantity(newValue);
  };

  const addQuantity = () => {
    const newValue = Number(quantity) + 1;
    if (newValue > maxQuantity) return;

    setQuantity(newValue);
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
