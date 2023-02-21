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
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const CoffeCardItem: React.FC<CoffeCardItemProps> = ({
  quantity,
  onIncrement,
  onDecrement,
}) => {
  return (
    <CoffeCardItemContainer>
      <CoffeCardItemQuantity>
        <CoffeCardItemQuantityButton onClick={onDecrement}>
          <Minus weight="bold" />
        </CoffeCardItemQuantityButton>

        <CoffeCardItemQuantityValue>{quantity}</CoffeCardItemQuantityValue>

        <CoffeCardItemQuantityButton onClick={onIncrement}>
          <Plus weight="bold" />
        </CoffeCardItemQuantityButton>
      </CoffeCardItemQuantity>

      <CoffeCardCartButton as={NavLink} to="/checkout">
        <ShoppingCart weight="fill" />
      </CoffeCardCartButton>
    </CoffeCardItemContainer>
  );
};
