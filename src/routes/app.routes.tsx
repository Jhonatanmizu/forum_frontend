import { Home, Presence, Timeline } from "../pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/presence",
    element: <Timeline />,
  },
  {
    path: "/admin/presence",
    element: <Presence />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
