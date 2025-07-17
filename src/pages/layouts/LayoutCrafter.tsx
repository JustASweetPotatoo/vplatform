import React, { Fragment, type JSX } from "react";
import type { Layout } from "./interface";
import type { RouteStateType } from "../../routes/config";
import { useAppSelector } from "../../redux/hooks";

class LayoutCrafter {
  loadLayout(layout: Layout, _pageRenderState: RouteStateType, Content: JSX.Element): React.ReactNode {
    let Header = layout.Header;
    let Footer = layout.Footer;

    const theme = useAppSelector((state) => state.themeSlice);

    return (
      <Fragment>
        <div className={theme.mode}>
          <Header />
          {Content}
          <Footer />
        </div>
      </Fragment>
    );
  }
}

const layoutCrafter = new LayoutCrafter();

export default layoutCrafter;
