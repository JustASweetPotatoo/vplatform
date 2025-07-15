import { Routes } from "react-router-dom";

import { routerRender } from "./routes/RouterRenderer";

function App() {
  
  return <Routes>{routerRender.renderRoutes()}</Routes>;
}

export default App;