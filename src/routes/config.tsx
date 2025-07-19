import type { ComponentType, JSX } from "react";
import HomePage from "../pages/Home";
import ConfessionPage from "../pages/Confession";
import MainContentConfessionTable from "../components/ConfessionComponent/MainContentConfessionTable";
import Media from "../pages/Confession/Media";
import Confession from "../pages/Confession";
import OverlayWrapper from "../components/overlay/OverlayWrapper";

export const RouteState = {
  loggedIn: "logged-in",
  loggedOut: "logged-out",
  default: "default",
};

export type RouteStateType = keyof typeof RouteState;

export interface RouteConfig {
  readonly path: string;
  page: ComponentType<{}>;
  requiredAuth?: boolean;
  element?: JSX.Element;
  children?: RouteConfig[];
}

export const HomePageRouteConfig: RouteConfig = {
  path: "*",
  page: HomePage,
};

export const ConfessionPageRouteConfig: RouteConfig = {
  path: "/confession",
  page: ConfessionPage,
  children: [
    {
      path: "",
      page: MainContentConfessionTable,
    },
    { path: "media/:mediaId", element: <OverlayWrapper />, page: Media },  
    {
      path: "message",
      page: MainContentConfessionTable,
    },
    {
      path: "saved",
      page: MainContentConfessionTable,
    },
    {
      path: "recent",
      page: MainContentConfessionTable,
    },
    {
      path: "my-account",
      page: MainContentConfessionTable,
    },
  ],
};

const routeConfigList: RouteConfig[] = [HomePageRouteConfig, ConfessionPageRouteConfig, { path: "/a", page: HomePage }];

export default routeConfigList;
