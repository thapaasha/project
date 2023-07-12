import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Homestay from "../pages/Homestay";
import Location from "../pages/Location";
import BaseLayout from "../layouts/BaseLayout";
import Register from "../pages/Register";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/homestay" element={<Homestay />} />
          <Route path="/location" element={<Location />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
