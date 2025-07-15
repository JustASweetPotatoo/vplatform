import type { FC, JSX, ReactNode } from "react";
import type { RouteStateType } from "../../routes/config";

export interface Layout {
  header: FC;
  footer: FC;
  data?: any;
}

export interface LayoutData {
  routeState: RouteStateType;
  userData?: any;
}
