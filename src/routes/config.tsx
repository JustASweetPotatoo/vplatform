import type { ComponentType } from "react";
import HomePage from "../pages/Home";

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

const routeConfigList: RouteConfig[] = [{ ...HomePageRouteConfig }, { path: "/a", page: HomePage }];

export default routeConfigList;
