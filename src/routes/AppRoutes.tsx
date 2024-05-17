import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Match from "../pages/Match";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/match" element={<Match />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
