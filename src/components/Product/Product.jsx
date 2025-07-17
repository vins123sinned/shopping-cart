import { useParams } from "react-router-dom";

const Product = () => {
  const { product } = useParams();
  
  return (
    <section className="product">
      <h1>Product</h1>
    </section>
  );
};

export { Product };
