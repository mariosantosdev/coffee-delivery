import { BillingCard } from "../BillingCard";
import { PaymentsCard } from "../PaymentsCard";
import { CheckoutDetailsContainer, TitleCheckoutDetails } from "./styles";

export const CheckoutDetails = () => {
  return (
    <CheckoutDetailsContainer>
      <TitleCheckoutDetails>Complete seu pedido</TitleCheckoutDetails>

      <BillingCard />

      <PaymentsCard />
    </CheckoutDetailsContainer>
  );
};
