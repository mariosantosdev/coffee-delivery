import styled from "styled-components";

export const BillingDetailsCard = styled.div`
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

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  .card-header__texts {
    display: flex;
    flex-direction: column;
  }
`;

export const BillingHeader = styled(CardHeader)`
  svg {
    color: ${({ theme }) => theme.colors.brand_yellow_dark};
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

export const BillingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.5rem;
  margin-top: 2rem;

  grid-template-areas:
    "street"
    "number"
    "neighborhood"
    "cep"
    "state"
    "complement"
    "city";

  @media (min-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "street street number"
      "neighborhood neighborhood neighborhood"
      "cep city state"
      "complement complement complement";
  }
`;

type InputProps = {
  gridArea?: string;
  isOptional?: boolean;
};

export const TextInput = styled.input<InputProps>`
  border: 1px solid ${({ theme }) => theme.colors.base_button};
  background-color: ${({ theme }) => theme.colors.base_input};
  padding: 0.75rem;

  grid-area: ${({ gridArea }) => gridArea};

  border-radius: 4px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.base_label};
  }

  :after {
    content: "${({ isOptional }) => (isOptional ? "Opcional" : "")}";
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.base_label};
    font-style: italic;
  }
`;
