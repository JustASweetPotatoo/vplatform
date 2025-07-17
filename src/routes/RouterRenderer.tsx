import type { JSX } from "react";
import { Route } from "react-router-dom";

import routeConfigList from "./config";

class RouteRenderer {
  constructor() {}

  public renderRoutes(): JSX.Element[] {
    return routeConfigList.map((config) => {
      const Page = config.page;

      if (config.children && config.children.length > 0) {
        return (
          <Route key={config.path} path={config.path} element={<Page />}>
            {config.children.map((child) => (
              <Route key={child.path} path={child.path} element={<child.page />} />
            ))}
          </Route>
        );
      }

      return <Route key={config.path} path={config.path} element={<Page />} />;
    });
  }
}

export const routerRender = new RouteRenderer();

export default RouteRenderer;
