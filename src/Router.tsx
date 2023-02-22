import { Route, Routes } from "react-router-dom";
import { HomePage } from "~/pages/Home";
import { PublicLayout } from "~/layouts/Public";
import { CheckoutPage } from "./pages/Checkout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};
