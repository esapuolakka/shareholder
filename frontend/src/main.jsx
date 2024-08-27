import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root, { loader as rootLoader } from "./routes/root";
import Osakasluettelo from "./routes/osakasluettelo";
import Osakenumerot from "./routes/osakenumerot";
import Merkintahistoria from "./routes/merkintahistoria";
import Osakkaidentiedot from "./routes/osakkaidentiedot";
import LisaaUusi from "./routes/lisaa-uusi";
import "./reset.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "osakasluettelo",
        element: <Osakasluettelo />,
      },
      {
        path: "osakenumerot",
        element: <Osakenumerot />,
      },
      {
        path: "merkintahistoria",
        element: <Merkintahistoria />,
      },
      {
        path: "osakkaidentiedot",
        element: <Osakkaidentiedot />,
      },
      {
        path: "lisaa-uusi",
        element: <LisaaUusi />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
