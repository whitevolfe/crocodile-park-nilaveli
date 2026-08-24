import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "@/App";
import About from "@/pages/About";
import Activities from "@/pages/Activities";
import Experience from "@/pages/Experience";
import Gallery from "@/pages/Gallery";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/activities",
    element: <Activities />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
