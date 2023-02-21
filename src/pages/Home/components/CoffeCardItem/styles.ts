import styled from "styled-components";

export const CoffeCardItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
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
