import { Outlet } from "react-router-dom";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Container } from "./styles";

export const PublicLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
