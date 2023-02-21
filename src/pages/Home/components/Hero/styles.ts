import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  min-height: 544px;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  max-width: 54%;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.base_title};
`;

export const HeroSubtitle = styled.h2`
  margin-top: 1rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.base_subtitle};
`;

export const HeroListItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;

  grid-gap: 1rem;
  margin-top: 4rem;
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
