import { useEffect, useState } from "react";
import styles from "./Products.module.css";

const Product = ({ title, price, imageLink, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <article
        className={styles.productCard}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imageLink}
          alt=""
          height="300"
          data-testid="product-image"
          className={styles.productImage}
        />
        <h2 className={styles.productTitle}>{title}</h2>
        <p className={styles.price}>${price}</p>
        <button
          type="button"
          className={styles.addToCart}
          aria-hidden={!isHovered}
        >
          Add to Cart
        </button>
      </article>
    </li>
  );
};

const Products = ({ category }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const productsData = await response.json();
        setProducts(productsData);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.productsSection}>
      <h1 className={styles.productsHeading}>{category}</h1>
      {loading && <p>Loading...</p>}
      {products && (
        <ul className={styles.products}>
          {products.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              imageLink={product.image}
              key={product.id}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export { Products };
