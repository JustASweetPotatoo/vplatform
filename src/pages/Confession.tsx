import layoutCrafter from "./layouts/LayoutCrafter";
import { useEffect, useState } from "react";
import { defineState } from "../auth/utils";
import { ConfessionPageRouteConfig } from "../routes/config";
// import { changeTheme } from "../redux/reducer/ThemeSlices";
// import { useAppDispatch } from "../redux/hooks";
import { ConfessionLayout } from "./layouts/list/ConfessionLayout";
import LeftMenu from "../components/ConfessionComponent/LeftMenu";
import { Outlet, useOutlet, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import PostModalDisplay from "../components/ConfessionComponent/MainContentConfessionTable/display/PostModalDisplay";

const Confession = () => {
  const [routeState, setRouteState] = useState(defineState(ConfessionPageRouteConfig));

  const mainOutlet = useOutlet();
  const outletContext = useOutletContext();
  const overlayOutlet = outletContext === "overlay" ? mainOutlet : null;

  const [modalOpen, setModalOpen] = useState(false);
  const selectedPost = useSelector((state: RootState) => state.postDetailModalSlice.post);

  useEffect(() => {
    setModalOpen(selectedPost ? true : false);
  }, [selectedPost]);

  let layout = ConfessionLayout({ routeState: routeState });

  const MainContent = (
    <section className="bg-[hsl(0,0%,80%)] pt-[4rem] dark:bg-[#1a1a1a] min-h-[calc(100vh-4rem)] transition-all">
      <div className="container mx-auto max-w-[100rem] flex flex-row justify-between min-h-[calc(100vh-4rem)]">
        {/* Left Menu */}
        <LeftMenu />

        {/* Main Content */}
        <div className="flex-1 max-w-[60rem] border-x border-[#4f4f4f] dark:border-[#4f4f4f]">
          <Outlet />

          {modalOpen && selectedPost && <PostModalDisplay isOpen={modalOpen} post={selectedPost} />}
        </div>

        {overlayOutlet && <div className="fixed inset-0 z-50 bg-[#000000a2]">{overlayOutlet}</div>}

        {/* Right Section */}
        <div className="w-[20rem] px-4 hidden xl:block">
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
