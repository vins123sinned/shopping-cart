import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  formatPrice,
  productLinkMap,
  productHeadingMap,
} from "../../utils/utils.js";
import { Loading } from "../Loading/Loading.jsx";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage.jsx";
import { Quantity } from "../Quantity/Quantity.jsx";
import styles from "./Product.module.css";
import { AddToCart } from "../AddToCart/AddToCart.jsx";

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
          return;
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

const Product = () => {
  const { productId } = useParams();
  const { product, loading, error } = useFetchProduct(productId);
  const [quantity, setQuantity] = useState("1");

  return (
    <section
      className={`${styles.productSection} mainSection`}
      data-testid="product-section"
    >
      {loading && !product && <Loading />}
      {error && <ErrorMessage message={error} />}
      {product && (
        <>
          <img
            src={product.image}
            alt="Product Image"
            height="500"
            className={styles.productImage}
          />
          <div className={styles.productInformation}>
            <Link
              to={`/shop/category/${productLinkMap[product.category]}`}
              role="region"
              className={styles.categoryLink}
            >
              {productHeadingMap[product.category]}
            </Link>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <p className={styles.price}>${formatPrice(product.price)}</p>
            <p className={styles.description}>{product.description}</p>
            <Quantity quantity={quantity} setQuantity={setQuantity} />
            <AddToCart
              className={styles.addToCart}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              imageLink={product.image}
              quantity={Number(quantity)}
            />
          </div>
        </>
      )}
    </section>
  );
};

export { Product };
