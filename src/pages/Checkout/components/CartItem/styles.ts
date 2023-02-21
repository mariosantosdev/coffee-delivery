import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base_button};

  img {
    width: 4rem;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .item-title {
    color: ${({ theme }) => theme.colors.base_subtitle};
  }

  .item-actions {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`;

export const ButtonRemoveItem = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.base_text};

  background-color: ${({ theme }) => theme.colors.base_button};
  transition: background-color 0.2s, color 0.2s;

  svg {
    color: ${({ theme }) => theme.colors.brand_purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.base_hover};
    color: ${({ theme }) => theme.colors.base_subtitle};
  }
`;

export const ItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;

  .item-total {
    font-weight: 700;
  }
`;
