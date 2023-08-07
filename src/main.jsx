import "./index.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HeaderComponent from "./components/header/headerComponent.jsx";
import HomeRoute from "./routes/HomeRouter"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderComponent />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
