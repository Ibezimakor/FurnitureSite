import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ArticlesPage from "./Pages/FunitureArticles/ArticlesPage";
import ServicePage from "./Pages/FunitureService/ServicePage";
import AboutUsPage from "./Pages/FunitureAboutUs/AboutusPage";
import DetailsPage from "./Pages/FunitureProductDetals/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Product",
    element: <ProductPage />,
  },
  {
    path: "Article",
    element: <ArticlesPage />,
  },
  {
    path: "Service",
    element: <ServicePage />,
  },
  {
    path: "AboutUs",
    element: <AboutUsPage />,
  },

  {
    path: "DetailsPage",
    element: <DetailsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
