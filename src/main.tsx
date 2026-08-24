import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";
import GoogleTranslate from "@/components/GoogleTranslate";

import App from "@/App";
import About from "@/pages/About";
import Activities from "@/pages/Activities";
import Experience from "@/pages/Experience";
import Gallery from "@/pages/Gallery";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import ActivityDetails from "@/pages/ActivityDetails";

import "./styles.css";

function Layout() {
  return (
    <>
      <GoogleTranslate />
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/activities/:slug",
        element: <ActivityDetails />,
      },
      {
        path: "/about",
        element: <About />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
