import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

import {
  CoffeCardItemContainer,
  CoffeCardCartButton,
  CoffeCardItemQuantity,
  CoffeCardItemQuantityButton,
  CoffeCardItemQuantityValue,
} from "./styles";

interface CoffeCardItemProps {
  slug: string;
}

export const CoffeCardItem: React.FC<CoffeCardItemProps> = ({ slug }) => {
  return (
    <CoffeCardItemContainer>
      <CoffeCardItemQuantity>
        <CoffeCardItemQuantityButton>
          <Minus weight="bold" />
        </CoffeCardItemQuantityButton>

        <CoffeCardItemQuantityValue>1</CoffeCardItemQuantityValue>

        <CoffeCardItemQuantityButton>
          <Plus weight="bold" />
        </CoffeCardItemQuantityButton>
      </CoffeCardItemQuantity>

      <CoffeCardCartButton as={NavLink} to="/checkout">
        <ShoppingCart weight="fill" />
      </CoffeCardCartButton>
    </CoffeCardItemContainer>
  );
};
