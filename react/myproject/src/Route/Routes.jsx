
import { Route, Routes } from "react-router-dom";
import Login from "../pages/LoginPage";
import Product from "../pages/Product"

export default function RoutesNav() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </>
  );
}
