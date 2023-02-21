import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import {
  CartButton,
  HeaderContainer,
  HeaderNav,
  LocationButton,
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src="/logo.svg"
          alt="Copo de café na cor roxa representando a logo do Coffee Delivery"
        />
      </NavLink>

      <HeaderNav>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Oliveira, MG
        </LocationButton>
        <CartButton as={NavLink} to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </HeaderNav>
    </HeaderContainer>
  );
};
