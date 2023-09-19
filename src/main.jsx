import "./index.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HeaderComponent from "./components/header/headerComponent.jsx";
import HomeRoute from "./routes/HomeRouter"
import { Provider } from "react-redux";
import store from "./store/index"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <HeaderComponent />
    <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
)
