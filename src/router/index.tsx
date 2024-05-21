import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

import Index from "../pages/Index";
import Appy from "../components/Appy";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/appy" element={<Appy />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
