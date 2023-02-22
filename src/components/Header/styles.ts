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
  background: ${({ theme }) => theme.colors.brand_purple_light};
  color: ${({ theme }) => theme.colors.brand_purple_dark};

  svg {
    color: ${({ theme }) => theme.colors.brand_purple};
  }
`;

type CartButtonProps = {
  items?: number;
  hasItems?: boolean;
};

export const CartButton = styled(BaseButton)<CartButtonProps>`
  position: relative;
  background: ${({ theme }) => theme.colors.brand_yellow_light};
  color: ${({ theme }) => theme.colors.brand_yellow_dark};

  ::after {
    content: "${({ items }) => items}";
    display: ${({ hasItems }) => (hasItems ? "flex" : "none")};
    justify-content: center;
    align-items: center;

    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background-color: ${({ theme }) => theme.colors.brand_yellow_dark};
    color: ${({ theme }) => theme.colors.base_white};
    padding: 0.15rem;
    min-width: 1rem;
    min-height: 1rem;
    border-radius: 100%;
  }
`;
