import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Order from "./pages/Order";
import Receipt from "./pages/Receipt";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { LocationAccessChecker } from "./hooks/LocationAccessChecker";
import ReceiptTest from "./pages/ReceiptTest";
import MenuOption from "./pages/MenuOption";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, path: "/", element: <Login /> },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "order/:tableNumber",
        element: <Order />,
      },
      {
        path: "order/:tableNumber/:type/:foodId",
        element: <MenuOption />,
      },
      {
        path: "order/:tableNumber/receipt",
        element: <Receipt />,
      },
      // Receipt
      {
        path: "receipt/:tableNumber",
        element: <ReceiptTest />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
