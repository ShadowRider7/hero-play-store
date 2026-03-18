import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import ShowAllApps from "../pages/ShowAllApps/ShowAllApps";
import InstalledApps from "../pages/InstalledApps/InstalledApps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppDetailsBig from "../pages/AppDetails/AppDetailsBig";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/heroApps.json"),
        Component: Home,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
      {
        path: "/apps",
        loader: () => fetch("/heroApps.json"),

        Component: ShowAllApps,
      },
      {
        path: "/apps/:id",
        loader: () => fetch("/heroApps.json"),

        Component: AppDetailsBig,
      },
      {
        path: "/installation",
        loader: () => fetch("/heroApps.json"),
        Component: InstalledApps,
      },
    ],
  },
]);
