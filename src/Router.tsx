import { Route, Routes } from "react-router-dom";
import { HomePage } from "~/pages/Home";
import { PublicLayout } from "~/layouts/Public";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
