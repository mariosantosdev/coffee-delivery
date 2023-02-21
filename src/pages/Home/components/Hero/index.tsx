import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeImage from "./coffe.png";
import {
  HeroContainer,
  HeroContent,
  HeroItem,
  HeroListItems,
  HeroSubtitle,
  HeroTitle,
} from "./styles";

export const HomeHero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          Encontre o café perfeito para qualquer hora do dia
        </HeroTitle>
        <HeroSubtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </HeroSubtitle>

        <HeroListItems>
          <HeroItem color="orange">
            <div className="item-icon">
              <ShoppingCart size={16} weight="fill" />
            </div>
            Compra simples e segura
          </HeroItem>
          <HeroItem color="gray">
            <div className="item-icon">
              <Package size={16} weight="fill" />
            </div>
            Embalagem mantém o café intacto
          </HeroItem>
          <HeroItem color="yellow">
            <div className="item-icon">
              <Timer size={16} weight="fill" />
            </div>
            Entrega rápida e rastreada
          </HeroItem>
          <HeroItem color="purple">
            <div className="item-icon">
              <Coffee size={16} weight="fill" />
            </div>
            O café chega fresquinho até você
          </HeroItem>
        </HeroListItems>
      </HeroContent>

      <img
        src={coffeImage}
        alt="Imagem ilustrativa de um café com fundo amarelo"
      />
    </HeroContainer>
  );
};
