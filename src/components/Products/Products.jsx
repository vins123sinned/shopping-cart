import { useEffect, useState } from "react";
import styles from "./Products.module.css";

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
    <section className={styles.products}>
      <h1 className="productsHeading">{category}</h1>
      {loading && <p>Loading...</p>}
      {products &&
        products.map((product) => (
          <article className={styles.productCard} key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button type="button" className={styles.addToCart}>
              Add to Cart
            </button>
          </article>
        ))}
    </section>
  );
};

export { Products };
