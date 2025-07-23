import { Link, useOutletContext } from "react-router-dom";
import { formatPrice, productLinkMap, productHeadingMap } from "../../utils";
import { Quantity } from "../Quantity/Quantity";
import styles from "./Cart.module.css";

const CartItem = ({ title, price, category, imageLink, quantity, id }) => {
  return (
    <li>
      <article className={styles.cartItem}>
        <div className={styles.leftSection}>
          <img
            src={imageLink}
            alt="Product image"
            className={styles.itemImage}
          />
          <div className={styles.titleCategoryContainer}>
            <h2 className={styles.itemTitle}>{title}</h2>
            <Link
              to={`/shop/category/${productLinkMap[category]}`}
              className={styles.itemCategory}
            >
              {productHeadingMap[category]}
            </Link>
          </div>
        </div>

        <p className={styles.itemPrice}>${formatPrice(price)}</p>

        <div className={styles.totalQuantityContainer}>
          <p className={styles.itemTotal}>${formatPrice(price * quantity)}</p>
          <Quantity quantity={quantity} id={id} type={"cart"} />
        </div>
      </article>
    </li>
  );
};

const Cart = () => {
  const [cart, setCart] = useOutletContext();
  const itemCount = cart.reduce(
    (itemCount, item) => itemCount + Number(item.quantity),
    0,
  );

  const clearCart = () => {
    setCart([]);
  };

  return (
    <section className={`${styles.cartSection} mainSection`}>
      <h1 className={styles.cartHeading}>Your Cart</h1>

      <div className={styles.flexDiv}>
        <ul className={styles.cartItems}>
          <li className={styles.itemCountList}>
            <p>{itemCount} items</p>
          </li>
          <li className={styles.headerList}>
            <p className={styles.headerProduct}>Product</p>
            <p className={styles.headerPrice}>Price</p>
            <p className={styles.headerQuantity}>Quantity</p>
            <p className={styles.headerTotal}>Total</p>
          </li>
          {cart.map((item) => (
            <CartItem
              title={item.title}
              imageLink={item.imageLink}
              price={item.price}
              category={item.category}
              quantity={item.quantity}
              id={item.id}
              key={item.id}
            />
          ))}
        </ul>
      </div>
      <button
        type="button"
        className={styles.checkoutButton}
        onClick={clearCart}
      >
        Checkout Now
      </button>
    </section>
  );
};

export { Cart };
