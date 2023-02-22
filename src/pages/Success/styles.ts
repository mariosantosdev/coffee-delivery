import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 2rem;

  justify-content: center;
  align-items: center;

  .hero-image {
    width: 20rem;
  }

  @media (min-width: 48em) {
    flex-direction: row;
    justify-content: space-between;

    .hero-image {
      width: 28rem;
    }
  }
`;

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SuccessTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  font-family: "Baloo 2", cursive;
  color: ${({ theme }) => theme.colors.brand_yellow_dark};
`;

export const SuccessText = styled.p`
  color: ${({ theme }) => theme.colors.base_subtitle};
  font-size: 1.25rem;
`;

export const OrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  margin-top: 2.5rem;

  border-radius: 6px 36px;
  border: 1px solid #dbac2c;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

enum InfoIconVariant {
  purple = "brand_purple",
  yellow = "brand_yellow",
  orange = "brand_yellow_dark",
}

type InfoIconProps = {
  variant: keyof typeof InfoIconVariant;
};

export const InfoIcon = styled.div<InfoIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, variant }) =>
    theme.colors[InfoIconVariant[variant]]};
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.base_white};
  width: 2rem;
  height: 2rem;
`;

export const InfoText = styled.div`
  font-size: 0.875rem;

  span {
    display: block;
  }
`;

export const ReturnButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  background-color: ${({ theme }) => theme.colors.brand_yellow};
  color: ${({ theme }) => theme.colors.base_white};
  transition: background-color 0.2s;

  border: 0;
  border-radius: 6px;

  padding: 0.5rem 1rem;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand_yellow_dark};
  }
`;
