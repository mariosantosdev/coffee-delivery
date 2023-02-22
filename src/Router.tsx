import { Route, Routes } from "react-router-dom";
import { HomePage } from "~/pages/Home";
import { PublicLayout } from "~/layouts/Public";
import { CheckoutPage } from "./pages/Checkout";
import { SuccessPage } from "./pages/Success/indes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
};
