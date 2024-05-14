import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Map from "../components/Map";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/match" element={<Map />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
