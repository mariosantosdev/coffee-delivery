import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { ItemQuantity } from "~/components/ItemQuantity";

import { CoffeCardItemContainer, CoffeCardCartButton } from "./styles";

interface CoffeCardItemProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const CoffeCardItem: React.FC<CoffeCardItemProps> = (props) => {
  return (
    <CoffeCardItemContainer>
      <ItemQuantity {...props} />

      <CoffeCardCartButton as={NavLink} to="/checkout">
        <ShoppingCart weight="fill" />
      </CoffeCardCartButton>
    </CoffeCardItemContainer>
  );
};
