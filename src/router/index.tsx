import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "../pages/Index";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
