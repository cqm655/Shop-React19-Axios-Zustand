import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/home";
import { Products } from "./pages/products";
import { Cart } from "./pages/cart";
import { MainPage } from "./pages/main-page";

export const router = createBrowserRouter([
  {
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "products", element: <Products /> },
      {
        path: "carts",
        element: <Cart />,
      },
    ],
  },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
