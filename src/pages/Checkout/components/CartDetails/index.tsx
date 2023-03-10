import { useCart } from "~/context/CartContext";
import { formatPrice } from "~/utils/format";
import { CartItem } from "../CartItem";
import {
  CartConfirmButton,
  CartDetailsContainer,
  CartDetailsContent,
  CartDetailsFooter,
  CartDetailsItem,
  CartDetailsPrice,
  CartItemsList,
  TitleCartDetails,
} from "./styles";

export const CartDetails = () => {
  const { cart } = useCart();

  const disabledConfirmButton = cart.items.length === 0;

  return (
    <CartDetailsContainer>
      <TitleCartDetails>Cafés selecionados</TitleCartDetails>

      <CartDetailsContent>
        <CartItemsList>
          {cart.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          {cart.items.length === 0 && (
            <p className="empty-cart">Nenhum item adicionado ao carrinho</p>
          )}
        </CartItemsList>

        <CartDetailsFooter>
          <CartDetailsItem>
            <span>Total de itens</span>
            <span>{formatPrice(cart.priceTotalItems)}</span>
          </CartDetailsItem>

          <CartDetailsItem>
            <span>Entrega</span>
            <span>{formatPrice(cart.shipping)}</span>
          </CartDetailsItem>

          <CartDetailsPrice>
            <span>Total</span>
            <span>{formatPrice(cart.total)}</span>
          </CartDetailsPrice>

          <CartConfirmButton type="submit" disabled={disabledConfirmButton}>
            Confirmar Pedido
          </CartConfirmButton>
        </CartDetailsFooter>
      </CartDetailsContent>
    </CartDetailsContainer>
  );
};
