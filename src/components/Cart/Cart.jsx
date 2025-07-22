import { useOutletContext } from "react-router-dom";
import { formatPrice } from "../../utils";
import { Quantity } from "../Quantity/Quantity";
import styles from "./Cart.module.css";

const CartItem = ({ title, price, imageLink, quantity }) => {
  return (
    <li>
      <article className={styles.cartItem}>
        <div className={styles.productInformation}>
          <img src={imageLink} alt="Product image" />
          <h2>{title}</h2>
        </div>
        <p>{price}</p>
        <Quantity />
        <p>${formatPrice(price * quantity)}</p>
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

  return (
    <section className={`${styles.cartSection} mainSection`}>
      <h1 className={styles.cartHeading}>Your Cart</h1>
      <ul className={styles.cartItems}>
        <li>
          <p>{itemCount} items</p>
        </li>
        <li className={styles.cartItemsHeader}>
          <p className={styles.productInformation}>Product</p>
          <p>Quantity</p>
          <p>Price</p>
        </li>
        {cart.map((item) => (
          <CartItem
            title={item.title}
            imageLink={item.imageLink}
            price={item.price}
            quantity={item.quantity}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export { Cart };
