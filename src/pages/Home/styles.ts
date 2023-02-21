import styled from "styled-components";

export const CoffeContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  .container-title {
    color: ${({ theme }) => theme.colors.base_subtitle};
    font-size: 1.5rem;
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    text-align: center;

    @media (min-width: 48em) {
      font-size: 2rem;
      text-align: start;
    }
  }
`;

export const GridCoffees = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  margin-top: 3rem;
  justify-items: center;

  @media (min-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-top: 2rem;
  }

  @media (min-width: 62em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
