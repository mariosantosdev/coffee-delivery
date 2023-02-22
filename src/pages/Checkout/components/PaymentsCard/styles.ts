import styled from "styled-components";

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  .card-header__texts {
    display: flex;
    flex-direction: column;
  }
`;

export const PaymentsHeader = styled(CardHeader)`
  svg {
    color: ${({ theme }) => theme.colors.brand_purple};
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.base_subtitle};
`;

export const CardSubtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.base_text};
`;

export const PaymentDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.base_card};
  border-radius: 6px;

  @media (min-width: 48em) {
    padding: 1.5rem;
  }

  @media (min-width: 62em) {
    padding: 2.5rem;
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 48em) {
    flex-direction: row;
  }
`;
