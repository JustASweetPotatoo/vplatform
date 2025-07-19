// RouteRenderer.tsx
import type { JSX } from "react";
import { Route } from "react-router-dom";
import routeConfigList, { type RouteConfig } from "./config";

class RouteRenderer {
  public renderRoutes(): JSX.Element[] {
    return routeConfigList.map((config) => this.renderRoute(config));
  }

  private renderRoute(config: RouteConfig): JSX.Element {
    const Page = config.page;

    return (
      <Route key={config.path} path={config.path} element={<Page />}>
        {config.children?.map((child) => {
          const ChildPage = child.page;
          return <Route key={child.path} path={child.path} element={<ChildPage />} />;
        })}
      </Route>
    );
  }
}

export const routerRender = new RouteRenderer();
export default RouteRenderer;
