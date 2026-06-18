
import ReactDOM from 'react-dom/client'
import React from 'react'
import {createBrowserRouter, RouterProvider, Route , createRoutesFromElements} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx';
import ProductDetails from './pages/ProductDetails.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
    <Route index={true} element={< Home />} /> 
    <Route path="/product/:slug" element={< ProductDetails />} /> 
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
