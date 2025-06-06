import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AosProvider from "./Provider/Aos/AosProvider.jsx";
import router from "./Router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <AosProvider>
    <RouterProvider router={router} />
  </AosProvider>
);
