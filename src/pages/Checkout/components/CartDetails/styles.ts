import styled from "styled-components";

export const CartDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const TitleCartDetails = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  font-family: "Baloo 2", cursive;
  color: ${({ theme }) => theme.colors.base_subtitle};
`;

export const CartDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 44px;
  border-top-right-radius: 44px;
  border-bottom-right-radius: 6px;
  background-color: ${({ theme }) => theme.colors.base_card};
`;

export const CartItemsList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CartDetailsFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  gap: 0.25rem;
`;

export const CartDetailsItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
`;

export const CartDetailsPrice = styled(CartDetailsItem)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.base_subtitle};
`;

export const CartConfirmButton = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.base_white};
  background-color: ${({ theme }) => theme.colors.brand_yellow};
  transition: background-color 0.2s;
  text-transform: uppercase;
  margin-top: 1.5rem;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.brand_yellow_dark};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
