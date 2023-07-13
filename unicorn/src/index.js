import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Order from './pages/Order';
import Receipt from './pages/Receipt';
import Option from './pages/Option';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: 'order/:tableNumber', element: <Order /> },
      { path: 'order/:tableNumber/:type/:foodId', element: <Option/> },
      { path: 'order/:tableNumber/receipt', element: <Receipt /> }

    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
