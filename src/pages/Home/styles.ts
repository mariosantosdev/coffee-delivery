import styled from "styled-components";

export const CoffeContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  .container-title {
    color: ${({ theme }) => theme.colors.base_subtitle};
    font-size: 2rem;
    font-family: "Baloo 2", cursive;
    font-weight: 800;
  }
`;

export const GridCoffees = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
  justify-items: center;
`;
