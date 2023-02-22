import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas:
    "checkout-details"
    "cart-details";

  gap: 2rem;

  @media (min-width: 62em) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "checkout-details checkout-details cart-details";
  }
`;
