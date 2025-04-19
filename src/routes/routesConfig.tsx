import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Products from "../features/Product/Index";

// Lazy-loaded pages
const HomePage = lazy(() => import("../pages/HomePage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export const routesConfig: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },

      // Add other routes here
    ],
  },
  {
    // element: <p></p>,
    children: [
      {
        path: "error",
        element: <ErrorPage />,
      },
    ],
  },
];
