import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CategoryPage from "./pages/Category/CategoryPage.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritePage.jsx";

import "./Index.css";
import { ThemeProvider } from "./components/Context/ThemeContext.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "search",
          element: <HomePage />,
        },
        {
          path: "category/:categoryName",
          element: <CategoryPage />,
        },
        {
          path: "book/:id",
          element: <DetailsPage />,
        },
        {
          path: "favorites",
          element: <FavoritesPage />,
        },
      ],
    },
  ],
  { basename: "/Gutendex1/" },
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
