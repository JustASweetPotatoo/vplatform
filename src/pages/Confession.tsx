import layoutCrafter from "./layouts/LayoutCrafter";
import { useEffect, useState } from "react";
import { defineState } from "../auth/utils";
import { ConfessionPageRouteConfig } from "../routes/config";
// import { changeTheme } from "../redux/reducer/ThemeSlices";
// import { useAppDispatch } from "../redux/hooks";
import { ConfessionLayout } from "./layouts/list/ConfessionLayout";
import LeftMenu from "../components/ConfessionComponent/LeftMenu";
import { Outlet } from "react-router-dom";

const Confession = () => {
  const [routeState, setRouteState] = useState(defineState(ConfessionPageRouteConfig));
  // const dispatch = useAppDispatch();

  let layout = ConfessionLayout({ routeState: routeState });

  // const handleCounterButton = (_e: React.MouseEvent<HTMLButtonElement>) => {
  //   dispatch(changeTheme());
  // };

  {
    /* <button className="border bg-gray-300" onClick={handleCounterButton}>
        {"button"}
      </button>
      <h1>Hello</h1> */
  }

  const MainContent = (
    <section className="bg-[hsl(0,0%,80%)] pt-[4rem] dark:bg-[hsl(0,0%,16%)] min-h-[calc(100vh-4rem)] transition-all">
      <div className="container mx-auto max-w-[100rem] flex flex-row justify-between min-h-[calc(100vh-4rem)]">
        {/* Left Menu */}
        <LeftMenu />

        {/* Main Content */}
        <div className="flex-1 max-w-[60rem] px-6 border-r border-gray-300 dark:border-gray-700">
          <Outlet />
        </div>

        {/* Right Section */}
        <div className="w-[20rem] px-4">
          {/* Optional Right Sidebar */}
          Right section here
        </div>
      </div>
    </section>
  );

  useEffect(() => {
    setRouteState(defineState(ConfessionPageRouteConfig));
  }, []);

  return layoutCrafter.loadLayout(layout, routeState, MainContent);
};

export default Confession;
