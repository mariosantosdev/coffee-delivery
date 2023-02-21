import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.base_card};
  padding: 1.25rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  img {
    width: 6rem;
    height: 6rem;
    margin-top: -16%;
    object-fit: cover;
  }
`;

export const CoffeCardListTags = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const CoffeCardTag = styled.li`
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.brand_yellow_light};
  color: ${({ theme }) => theme.colors.brand_yellow_dark};
  list-style: none;
  font-size: 0.65rem;
`;

export const CoffeCardTitle = styled.h2`
  font-family: "Baloo 2", cursive;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.base_subtitle};
  line-height: 1.5rem;
  margin-top: 1rem;
`;

export const CoffeCardDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.base_label};
  margin-top: 0.5rem;
`;

export const CoffeCardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
`;

export const CoffeCardPrice = styled.span`
  color: ${({ theme }) => theme.colors.base_text};
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  font-size: 1.5rem;

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }
`;
