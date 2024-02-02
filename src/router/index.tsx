import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "../pages/Index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
