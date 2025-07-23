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
    path: "/",
    element: <Home />,
  },
  {
    path: "main-page",
    element: <MainPage />,
    children: [{ path: "products", element: <Products /> }],
  },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
