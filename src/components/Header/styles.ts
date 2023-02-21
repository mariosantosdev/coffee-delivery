import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1rem 0;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
`;

export const LocationButton = styled(BaseButton)`
  cursor: default;

  gap: 0.25rem;
  background: ${({ theme }) => theme.colors.brand.brand_purple_light};
  color: ${({ theme }) => theme.colors.brand.brand_purple_dark};

  svg {
    color: ${({ theme }) => theme.colors.brand.brand_purple};
  }
`;

export const CartButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.brand.brand_yellow_light};
  color: ${({ theme }) => theme.colors.brand.brand_yellow_dark};
`;
