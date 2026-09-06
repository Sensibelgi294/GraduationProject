import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Layout from "./component/Layout/Layout.jsx";
import Home from "./component/Home/Home.jsx";
import Products from "./component/Products/Products.jsx";
import Categories from "./component/Categories/Categories.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Login from "./component/Login/Login.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Register from "./component/Register/Register.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;