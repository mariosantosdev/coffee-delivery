import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "~/context/CartContext";
import {
  CartButton,
  HeaderContainer,
  HeaderNav,
  LocationButton,
} from "./styles";

export const Header = () => {
  const { cart } = useCart();

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
        <CartButton
          as={NavLink}
          to="/checkout"
          items={cart.items.length}
          hasItems={cart.items.length !== 0}
        >
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </HeaderNav>
    </HeaderContainer>
  );
};
