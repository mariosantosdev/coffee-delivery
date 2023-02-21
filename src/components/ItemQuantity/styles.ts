import styled from "styled-components";

export const ItemQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

export const ItemQuantityContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  border-radius: 6px;
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.colors.base_button};
`;

export const ItemQuantityButton = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.brand_purple};
`;

export const ItemQuantityValue = styled.span`
  color: ${({ theme }) => theme.colors.base_title};
`;
