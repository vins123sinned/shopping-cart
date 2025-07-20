import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { truncateTitle, formatPrice } from "../../utils.js";
import { Loading } from "../Loading/Loading.jsx";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage.jsx";
import { AddToCart } from "../AddToCart/AddToCart.jsx";
import styles from "./Products.module.css";

function useFetchProducts(category) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProducts = async () => {
      // could also use a wrapper when code gets more complex (see: key identities)
      setProducts(null);
      setLoading(true);
      setError(null);

      const categoryEndpointMap = {
        "mens-clothing": "men%27s%20clothing",
        "womens-clothing": "women%27s%20clothing",
        jewelry: "jewelery",
        electronics: "electronics",
      };

      const url = category
        ? `https://fakestoreapi.com/products/category/${categoryEndpointMap[category]}`
        : "https://fakestoreapi.com/products";

      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const productsData = await response.json();
        setProducts(productsData);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted!");
        } else {
          setError(error.message);
          setProducts(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, [category]);

  return { products, loading, error };
}

const ProductCard = ({ title, price, imageLink, id }) => {
  const [cart] = useOutletContext();
  const isInCart = cart.find((item) => item.id === id);

  return (
    <li>
      <article className={styles.productCard}>
        <Link to={`/shop/product/${id}`} className={styles.linkContainer}>
          <img
            src={imageLink}
            alt=""
            height="300"
            data-testid="product-image"
            className={styles.productImage}
          />
          <h2 className={styles.productTitle}>{truncateTitle(title, 50)}</h2>
        </Link>
        <p className={styles.price}>${formatPrice(price)}</p>
        {isInCart && <p>Is In Cart</p>}
        <AddToCart 
          className={styles.addToCart}  
          id={id}
          title={title}
          price={price}
          imageLink={imageLink}
        />
      </article>
    </li>
  );
};

const Products = () => {
  const { category } = useParams();
  const { products, loading, error } = useFetchProducts(category);

  const categoryHeadingMap = {
    "mens-clothing": "Men's Clothing",
    "womens-clothing": "Women's Clothing",
    jewelry: "Jewelry",
    electronics: "Electronics",
  };

  const heading = category ? categoryHeadingMap[category] : null;

  return (
    <section className={styles.productsSection}>
      <h1 className={styles.productsHeading}>{heading || "All Products"}</h1>
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {products && (
        <ul className={styles.products}>
          {products.map((product) => (
            <ProductCard
              id={product.id}
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
