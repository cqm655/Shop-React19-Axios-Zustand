import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/home";
import { Products } from "./pages/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
