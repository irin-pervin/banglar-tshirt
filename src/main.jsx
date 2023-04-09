import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch('tshirts.json')
      },

      {
        path: "/review",
        element: <OrderReview></OrderReview>,
      },

      {
        path: "/",
        element: <Home></Home>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
