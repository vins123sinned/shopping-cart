import { HomePage } from "./components/HomePage/HomePage.jsx";
import { Products } from "./components/Products/Products.jsx";
import { Product } from "./components/Product/Product.jsx";
import App from "./App";

// We have only one route here as they all share the navbar & footer
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <Products /> },
      { path: "shop/category/:category", element: <Products /> },
      { path: "shop/product/:productId", element: <Product /> },
    ],
  },
];

export { routes };
