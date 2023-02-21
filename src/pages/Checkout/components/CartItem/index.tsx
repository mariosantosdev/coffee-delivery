import { Trash } from "phosphor-react";
import { ItemQuantity } from "~/components/ItemQuantity";
import { useCart } from "~/context/CartContext";
import { formatPrice } from "~/utils/format";
import {
  ButtonRemoveItem,
  CartItemContainer,
  ItemDetails,
  ItemPrice,
} from "./styles";

interface CartItemProps {
  item: {
    id: number;
    slug: string;
    name: string;
    description: string;
    price: number;
    image: string;
    tags: string[];
    quantity: number;
  };
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { addItem, removeItem, decreaseItem } = useCart();

  return (
    <CartItemContainer>
      <img src={item.image} alt={item.name} />

      <ItemDetails>
        <h3 className="item-title">{item.name}</h3>

        <div className="item-actions">
          <ItemQuantity
            quantity={item.quantity}
            onIncrement={() => addItem(item)}
            onDecrement={() => decreaseItem(item)}
          />

          <ButtonRemoveItem onClick={() => removeItem(item)}>
            <Trash />
            Remover
          </ButtonRemoveItem>
        </div>
      </ItemDetails>

      <ItemPrice>
        <span>
          {item.quantity} x {formatPrice(item.price)}
        </span>
        <span className="item-total">
          {formatPrice(item.price * item.quantity)}
        </span>
      </ItemPrice>
    </CartItemContainer>
  );
};
