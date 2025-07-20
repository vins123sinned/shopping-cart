import { useOutletContext } from "react-router-dom";

const AddToCart = ({ className, id, title, price, imageLink, quantity }) => {
  const [cart, setCart] = useOutletContext();

  const addToCart = () => {
    const isInCart = cart.find((item) => item.id === id);

    if (isInCart) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item,
      );

      setCart(newCart);
    } else {
      const newItem = {
        id,
        title,
        price,
        imageLink,
        quantity,
      };

      setCart((previousCart) => [...previousCart, newItem]);
    }
  };

  return (
    <button type="button" className={className} onClick={addToCart}>
      Add to Cart
    </button>
  );
};

export { AddToCart };
