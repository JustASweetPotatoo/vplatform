import { Route, Routes, useLocation } from "react-router-dom";
import { routerRender } from "./routes/RouterRender";
import Media from "./pages/Confession/Media"; // modal

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      {/* Main routes */}
      <Routes location={state?.backgroundLocation || location}>{routerRender.renderRoutes()}</Routes>

      {/* Modal overlay route */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/confession/post/:id/media/:mediaId" element={<Media />} />
        </Routes>
      )}
    </>
  );
}

export default App;
