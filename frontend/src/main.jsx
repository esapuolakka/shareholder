import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root, { loader as rootLoader } from "./routes/root";
import Osakasluettelo, {
  loader as osakasluetteloLoader,
} from "./routes/osakasluettelo";
import Osakenumerot, {
  loader as osakenumerotLoader,
} from "./routes/osakenumerot";
import Merkintahistoria, {
  loader as merkintahistoriaLoader,
} from "./routes/merkintahistoria";
import Osakkaidentiedot, {
  loader as osakkaidentiedotLoader,
} from "./routes/osakkaidentiedot";
import LisaaUusi, { loader as LisaaUusiLoader } from "./routes/lisaa-uusi";
import "./reset.css";
import "./index.css";
import Dashboard, { loader as dashboardLoader } from "./routes/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: "osakasluettelo",
        element: <Osakasluettelo />,
        loader: osakasluetteloLoader,
      },
      {
        path: "osakenumerot",
        element: <Osakenumerot />,
        loader: osakenumerotLoader,
      },
      {
        path: "merkintahistoria",
        element: <Merkintahistoria />,
        loader: merkintahistoriaLoader,
      },
      {
        path: "osakkaidentiedot",
        element: <Osakkaidentiedot />,
        loader: osakkaidentiedotLoader,
      },
      {
        // route with person.id
        path: "osakkaidentiedot/:id",
        element: <Osakkaidentiedot />,
        loader: osakkaidentiedotLoader,
      },
      {
        path: "lisaa-uusi",
        element: <LisaaUusi />,
        loader: LisaaUusiLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
