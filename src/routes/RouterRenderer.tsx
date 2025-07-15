import type { JSX } from "react";
import { Route } from "react-router-dom";

import routeConfigList from "./config";

class RouteRenderer {
  constructor() {}

  public renderRoutes(): JSX.Element[] {
    return routeConfigList.map((config) => {
      const Page = config.page;

      return <Route key={config.path} path={config.path} element={<Page />}></Route>;
    });
  }
}

export const routerRender = new RouteRenderer();

export default RouteRenderer;
