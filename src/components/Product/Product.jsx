import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { Loading } from "../Loading/Loading";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

function useFetchProduct(productId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProduct = async () => {
      setProduct(null);
      setLoading(true);
      setError(null);

      try {
        const url = `https://fakestoreapi.com/products/${productId}`;
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const productData = await response.json();
        setProduct(productData);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted!");
        } else {
          setError(error.message);
          setProduct(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      controller.abort();
    };
  }, [productId]);

  return { product, loading, error };
}

const Quantity = () => {
  // when already in cart, update button to update cart!
  return (
    <>
      <label for="quantity">Quantity</label>
      <div>
        <button type="button">Subtract</button>
        <input type="number" id="quantity" max="100" />
        <button type="button">Add</button>
      </div>

      <button type="button">Add to Cart</button>
    </>
  );
};

const Product = () => {
  const { productId } = useParams();
  const { product, loading, error } = useFetchProduct(productId);

  const productLinkMap = {
    "men's clothing": "mens-clothing",
    "women's clothing": "womens-clothing",
    jewelery: "jewelry",
    electronics: "electronics",
  };

  const productHeadingMap = {
    "men's clothing": "Men's Clothing",
    "women's clothing": "Women's Clothing",
    jewelery: "Jewelry",
    electronics: "Electronics",
  };

  return (
    <section className={styles.product}>
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {product && (
        <>
          <img
            src={product.image}
            alt="Product Image"
            height="500"
            className={styles.productImage}
          />
          <div className="productInformation">
            <Link
              to={`/shop/category/${productLinkMap[product.category]}`}
              role="region"
            >
              {productHeadingMap[product.category]}
            </Link>
            <h1>{product.title}</h1>
            <p className="price">{product.price}</p>
            <p>{product.description}</p>
            <Quantity />
          </div>
        </>
      )}
    </section>
  );
};

export { Product };
