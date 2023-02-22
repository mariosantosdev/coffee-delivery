import styled from "styled-components";

export const CheckoutDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  grid-area: checkout-details;
`;

export const TitleCheckoutDetails = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  font-family: "Baloo 2", cursive;
  color: ${({ theme }) => theme.colors.base_subtitle};
`;
