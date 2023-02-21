import { useCart } from "~/context/CartContext";
import { CoffeCardItem } from "../CoffeCardItem";
import {
  CoffeCardContainer,
  CoffeCardDescription,
  CoffeCardFooter,
  CoffeCardListTags,
  CoffeCardPrice,
  CoffeCardTag,
  CoffeCardTitle,
} from "./styles";

export type Coffe = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
};

export interface CoffeCardProps {
  coffe: Coffe;
}

export const CoffeCard: React.FC<CoffeCardProps> = ({ coffe }) => {
  const { getQuantity, addItem, removeItem } = useCart();

  return (
    <CoffeCardContainer>
      <img src={coffe.image} alt={coffe.description} />

      <CoffeCardListTags>
        {coffe.tags.map((tag) => (
          <CoffeCardTag key={tag}>{tag.toUpperCase()}</CoffeCardTag>
        ))}
      </CoffeCardListTags>

      <CoffeCardTitle>{coffe.name}</CoffeCardTitle>

      <CoffeCardDescription>{coffe.description}</CoffeCardDescription>

      <CoffeCardFooter>
        <CoffeCardPrice>
          <span>R$ </span>
          {Intl.NumberFormat("pt-br", {
            currency: "brl",
            style: "decimal",
            minimumFractionDigits: 2,
          }).format(coffe.price)}
        </CoffeCardPrice>

        <CoffeCardItem
          onIncrement={() => addItem(coffe)}
          onDecrement={() => removeItem(coffe)}
          quantity={getQuantity(coffe)}
        />
      </CoffeCardFooter>
    </CoffeCardContainer>
  );
};
