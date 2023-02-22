import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useEffect, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "~/context/CartContext";
import {
  InfoIcon,
  InfoText,
  ReturnButton,
  SuccessContainer,
  SuccessContent,
  OrderInfo,
  OrderInfoWrapper,
  SuccessText,
  SuccessTitle,
} from "./styles";

export function SuccessPage() {
  const { cart } = useCart();
  const redirect = useNavigate();

  useEffect(() => {
    if (!cart.finished) redirect("/");
  }, []);

  const street = `${cart.address.street}, ${cart.address.number}`;
  const address = `${cart.address.neighborhood} - ${cart.address.city}, ${cart.address.state}`;

  const payment = useMemo(() => {
    switch (cart.paymentMethod) {
      case "credit":
        return "Cartão de Crédito";
      case "debit":
        return "Cartão de Débito";
      case "cash":
        return "Dinheiro";
      default:
        return "";
    }
  }, [cart.paymentMethod]);

  return (
    <SuccessContainer>
      <SuccessContent>
        <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
        <SuccessText>
          Agora é só aguardar que logo o café chegará até você
        </SuccessText>

        <OrderInfoWrapper>
          <OrderInfo>
            <InfoIcon variant="purple">
              <MapPin weight="fill" />
            </InfoIcon>
            <InfoText>
              <span>
                Entrega em <b>{street}</b>
              </span>
              <span>{address}</span>
            </InfoText>
          </OrderInfo>

          <OrderInfo>
            <InfoIcon variant="yellow">
              <Timer weight="fill" />
            </InfoIcon>
            <InfoText>
              <span>Previsão de entrega</span>
              <span>
                <b>20 min - 30 min</b>
              </span>
            </InfoText>
          </OrderInfo>

          <OrderInfo>
            <InfoIcon variant="orange">
              <CurrencyDollar weight="fill" />
            </InfoIcon>
            <InfoText>
              <span>Pagamento na entrega</span>
              <span>
                <b>{payment}</b>
              </span>
            </InfoText>
          </OrderInfo>
        </OrderInfoWrapper>

        <ReturnButton as={NavLink} to="/">
          Voltar para a página inicial
        </ReturnButton>
      </SuccessContent>

      <img src="/delivery.png" className="hero-image" />
    </SuccessContainer>
  );
}
