import styled from "styled-components";

export const RadioInputContainer = styled.label`
  cursor: pointer;

  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors.base_button};
  border-radius: 6px;
  border: 1px solid transparent;
  transition: background-color 0.2s;

  svg {
    color: ${({ theme }) => theme.colors.brand_purple};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.base_hover};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.brand_purple_light};
    border: 1px solid ${({ theme }) => theme.colors.brand_purple};
  }
`;
