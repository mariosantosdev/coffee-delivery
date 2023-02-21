import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;

  align-items: center;
  justify-content: center;

  img {
    width: 16rem;
  }

  @media (min-width: 48em) {
    img {
      width: 20rem;
    }
  }

  @media (min-width: 62em) {
    flex-direction: row;

    justify-content: space-between;
    min-height: 544px;

    img {
      width: 32rem;
    }
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  @media (min-width: 62em) {
    align-items: flex-start;

    max-width: 54%;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 1.5rem;
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.base_title};
  text-align: center;

  @media (min-width: 48em) {
    font-size: 2rem;
  }

  @media (min-width: 62em) {
    font-size: 3rem;
    text-align: start;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1rem;
  margin-top: 0.75rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.base_subtitle};

  @media (min-width: 48em) {
    font-size: 1.25rem;
  }

  @media (min-width: 62em) {
    text-align: start;
  }
`;

export const HeroListItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;

  grid-gap: 0.5rem;
  margin-top: 2rem;

  @media (min-width: 48em) {
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 4rem;
  }
`;

enum HeroItemColors {
  "orange" = "brand_yellow_dark",
  "yellow" = "brand_yellow",
  "gray" = "base_text",
  "purple" = "brand_purple",
}

interface HeroItemProps {
  color?: keyof typeof HeroItemColors;
}

export const HeroItem = styled.div<HeroItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  .item-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme, color = "gray" }) =>
      theme.colors[HeroItemColors[color]]};
    border-radius: 100%;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.base_background};
  }
`;
