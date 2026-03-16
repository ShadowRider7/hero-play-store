import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import ShowAllApps from "../pages/ShowAllApps/ShowAllApps";
import InstalledApps from "../pages/InstalledApps/InstalledApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/heroApps.json"),
        Component: ShowAllApps,
      },
      {
        path: "/installedApps",
        Component: InstalledApps,
      },
    ],
  },
]);
