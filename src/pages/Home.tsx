import layoutCrafter from "./layouts/LayoutCrafter";
import { DefaultLayout } from "./layouts/list/DefaultLayout";
import { useEffect, useState } from "react";
import { defineState } from "../auth/utils";
import { HomePageRouteConfig } from "../routes/config";
import { changeTheme } from "../redux/reducer/slices/ThemeSlices";
import { useAppDispatch } from "../redux/hooks";

const HomePage = () => {
  const [routeState, setRouteState] = useState(defineState(HomePageRouteConfig));
  const dispatch = useAppDispatch();

  let layout = DefaultLayout({ routeState: routeState });

  const handleCounterButton = (_e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(changeTheme());
  };

  const MainContent = (
    <section className={"bg-[hsl(0,0%,80%)] dark:bg-[hsl(0,0%,16%)]" + ` min-h-[calc(200vh-4rem)] transition-all`}>
      <button className="border bg-gray-300" onClick={handleCounterButton}>
        {"button"}
      </button>
      <h1>Hello</h1>
    </section>
  );

  useEffect(() => {
    setRouteState(defineState(HomePageRouteConfig));
  }, []);

  return layoutCrafter.loadLayout(layout, routeState, MainContent);
};

export default HomePage;
