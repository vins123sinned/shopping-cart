import { HomePage } from "./components/HomePage/HomePage.jsx";
import App from "./App";

// We have only one route here as they all share the navbar
const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export { routes };
