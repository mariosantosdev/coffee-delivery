import { Minus, Plus } from "phosphor-react";

import {
  ItemQuantityContainer,
  ItemQuantityContent,
  ItemQuantityButton,
  ItemQuantityValue,
} from "./styles";

interface ItemQuantityProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const ItemQuantity: React.FC<ItemQuantityProps> = ({
  quantity,
  onIncrement,
  onDecrement,
}) => {
  return (
    <ItemQuantityContainer>
      <ItemQuantityContent>
        <ItemQuantityButton type="button" onClick={onDecrement}>
          <Minus weight="bold" />
        </ItemQuantityButton>

        <ItemQuantityValue>{quantity}</ItemQuantityValue>

        <ItemQuantityButton type="button" onClick={onIncrement}>
          <Plus weight="bold" />
        </ItemQuantityButton>
      </ItemQuantityContent>
    </ItemQuantityContainer>
  );
};
