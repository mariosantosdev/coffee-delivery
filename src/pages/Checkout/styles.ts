import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "checkout-details checkout-details cart-details";

  gap: 2rem;
`;
