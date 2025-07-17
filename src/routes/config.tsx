import type { ComponentType } from "react";
import HomePage from "../pages/Home";
import ConfessionPage from "../pages/Confession";
import MainContentConfessionTable from "../components/ConfessionComponent/MainContentConfessionTable";

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
