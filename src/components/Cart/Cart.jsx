import { Link, useOutletContext } from "react-router-dom";
import {
  formatPrice,
  productLinkMap,
  productHeadingMap,
} from "../../utils/utils.js";
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
          <Quantity quantity={quantity} id={id} type="cart" />
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

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const salesTax = subTotal * 0.08375;
  const shippingFee = subTotal > 60 ? 0 : 5.0;

  const clearCart = () => {
    setCart([]);
  };

  return (
    <section className={`${styles.cartSection} mainSection`}>
      <h1 className={styles.cartHeading}>Your Cart</h1>

      <div className={styles.flexDiv}>
        <section
          className={styles.cartItemsContainer}
          aria-labelledby="cart-items"
        >
          <h2 className="screen-reader-only" id="cart-items">
            Cart Items
          </h2>
          <ul className={styles.cartItems}>
            <li className={styles.itemCountList}>
              <p>{itemCount} items</p>
            </li>
            <li className={styles.headerList}>
              <p className={styles.headerProduct}>Product</p>
              <p className={styles.headerPrice}>Price</p>
              <p className={styles.headerTotal}>Total</p>
              <p className={styles.headerQuantity}>Quantity</p>
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
        </section>

        <section
          className={styles.orderContainer}
          aria-labelledby="order-summary"
        >
          <h2 className={styles.orderSummaryHeading} id="order-summary">
            Order Summary
          </h2>
          <ul className={styles.orderSummary}>
            <li className={styles.orderList}>
              <p className={styles.orderDescription}>Subtotal:</p>
              <p>${formatPrice(subTotal)}</p>
            </li>
            <li className={styles.orderList}>
              <p className={styles.orderDescription}>Sales Tax (8.375%):</p>
              <p>${formatPrice(salesTax)}</p>
            </li>
            <li className={styles.orderList}>
              <p className={styles.orderDescription}>Shipping Fee:</p>
              <p>
                {shippingFee === 0 ? "Free" : `$${formatPrice(shippingFee)}`}
              </p>
            </li>
            <li className={styles.orderList}>
              <p className={styles.orderDescription}>Order Total:</p>
              <p>${formatPrice(subTotal + salesTax + shippingFee)}</p>
            </li>
            <li>
              <button
                type="button"
                className={styles.checkoutButton}
                onClick={clearCart}
              >
                Checkout Now
              </button>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export { Cart };
