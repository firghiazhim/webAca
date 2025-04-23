import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <HomePage />,
//   },
//   {
//     path: "/home",
//     element: <HomePage />,
//   },
//   {
//     path: "/you",
//     element: <You />,
//   },
//   {
//     path: "/we",
//     element: <We />,
//   },
//   {
//     path: "/hope",
//     element: <Hope />,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>
);
