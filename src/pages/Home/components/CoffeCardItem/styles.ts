import styled from "styled-components";

export const CoffeCardItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

export const CoffeCardItemQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  border-radius: 6px;
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.colors.base_button};
`;

export const CoffeCardItemQuantityButton = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.brand_purple};
`;

export const CoffeCardItemQuantityValue = styled.span`
  color: ${({ theme }) => theme.colors.base_title};
`;

export const CoffeCardCartButton = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme.colors.brand_purple_dark};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.base_card};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand_purple};
  }
`;
