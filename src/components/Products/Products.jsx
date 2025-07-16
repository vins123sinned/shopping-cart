import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { Loading } from "../Loading/Loading.jsx";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage.jsx";
import { useParams } from "react-router-dom";

function truncateTitle(title, maxChar, suffix = "...") {
  if (!title) return;
  return title.length > maxChar
    ? title.slice(0, maxChar).trim() + suffix
    : title;
}

function formatPrice(price) {
  return Number(price).toFixed(2);
}

const Product = ({ title, price, imageLink }) => {
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
        <h2 className={styles.productTitle}>{truncateTitle(title, 50)}</h2>
        <p className={styles.price}>${formatPrice(price)}</p>
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

const Products = () => {
  const { category } = useParams();

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryHeadingMap = {
    "mens-clothing": "Men's Clothing",
    "womens-clothing": "Women's Clothing",
    jewelry: "Jewelry",
    electronics: "Electronics",
  };

  const heading = category ? categoryHeadingMap[category] : null;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryEndpointMap = {
          "mens-clothing": "men%27s%20clothing",
          "womens-clothing": "women%27s%20clothing",
          jewelry: "jewelery",
          electronics: "electronics",
        };

        const url = category
          ? `https://fakestoreapi.com/products/category/${categoryEndpointMap[category]}`
          : "https://fakestoreapi.com/products";

        const response = await fetch(url);
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
  }, [category]);

  return (
    <section className={styles.productsSection}>
      <h1 className={styles.productsHeading}>{heading || "All Products"}</h1>
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
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
