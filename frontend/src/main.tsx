import ReactDOM from "react-dom/client";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.DEV ? "http://localhost:4000" : "/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
