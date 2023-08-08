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
import Option from "./pages/Option";

import { LocationAccessChecker } from "./hooks/LocationAccessChecker";
import QrPage from "./pages/Qrpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, path: "/login", element: <Login /> },
      { path: "/", element: <QrPage /> },
      {
        path: "signup",
        element: (
          <LocationAccessChecker>
            <SignUp />
          </LocationAccessChecker>
        ),
      },
      {
        path: "order/:tableNumber",
        element: (
          <LocationAccessChecker>
            <Order />
          </LocationAccessChecker>
        ),
      },
      {
        path: "order/:tableNumber/:type/:foodId",
        element: (
          <LocationAccessChecker>
            <Option />
          </LocationAccessChecker>
        ),
      },
      {
        path: "order/:tableNumber/receipt",
        element: (
          <LocationAccessChecker>
            <Receipt />
          </LocationAccessChecker>
        ),
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
