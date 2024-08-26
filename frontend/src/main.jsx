import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Osakasluettelo from "./routes/osakasluettelo";
import Osakenumerot from "./routes/osakenumerot";
import Merkintahistoria from "./routes/merkintahistoria";
import Osakkaidentiedot from "./routes/osakkaidentiedot";
import LisaaUusi from "./routes/lisaa-uusi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
