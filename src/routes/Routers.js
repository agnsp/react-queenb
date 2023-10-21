import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/services/:id" element={<ServiceDetails />} />
    </Routes>
  );
};

export default Routers;
