import { Fragment, useEffect, useState } from "react";
import { CoffeCard, Coffe } from "./components/CoffeCard";
import { HomeHero } from "./components/Hero";
import { CoffeContainer, GridCoffees } from "./styles";

export function HomePage() {
  const [coffes, setCoffes] = useState<Coffe[]>([]);

  useEffect(() => {
    fetch("/api/coffes")
      .then((response) => response.json())
      .then((data) => setCoffes(data.coffes));
  }, []);

  return (
    <Fragment>
      <HomeHero />
      <CoffeContainer>
        <h2>Nossos cafés</h2>
        <GridCoffees>
          {coffes.map((coffe) => (
            <CoffeCard key={coffe.slug} coffe={coffe} />
          ))}
        </GridCoffees>
      </CoffeContainer>
    </Fragment>
  );
}
