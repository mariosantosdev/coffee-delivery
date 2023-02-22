import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import {
  BillingContent,
  BillingDetailsCard,
  BillingHeader,
  CardSubtitle,
  CardTitle,
  TextInput,
} from "./styles";

type CheckoutBillingFormData = {
  postalCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
};

export const BillingCard = () => {
  const { register } = useFormContext<CheckoutBillingFormData>();

  return (
    <BillingDetailsCard>
      <BillingHeader>
        <MapPinLine size={22} />
        <div className="card-header__texts">
          <CardTitle>Endereço de entrega</CardTitle>
          <CardSubtitle>
            Informe o endereço onde deseja receber seu pedido
          </CardSubtitle>
        </div>
      </BillingHeader>

      <BillingContent>
        <TextInput gridArea="street" htmlFor="street">
          <input
            id="street"
            type="text"
            placeholder="Rua"
            autoComplete="street-address"
            {...register("street")}
          />
        </TextInput>

        <TextInput gridArea="number" htmlFor="number">
          <input
            id="number"
            type="number"
            placeholder="Número"
            {...register("number", { valueAsNumber: true })}
          />
        </TextInput>

        <TextInput gridArea="neighborhood" htmlFor="neighborhood">
          <input
            id="neighborhood"
            type="text"
            placeholder="Bairro"
            autoComplete="street-address"
            {...register("neighborhood")}
          />
        </TextInput>

        <TextInput gridArea="cep" htmlFor="postalCode">
          <input
            id="postalCode"
            type="text"
            placeholder="CEP"
            autoComplete="postal-code"
            {...register("postalCode")}
          />
        </TextInput>

        <TextInput gridArea="city" htmlFor="city">
          <input
            id="city"
            type="text"
            placeholder="Cidade"
            autoComplete="street-address"
            {...register("city")}
          />
        </TextInput>

        <TextInput gridArea="state" htmlFor="state">
          <input
            id="state"
            type="text"
            placeholder="UF"
            autoComplete="street-address"
            {...register("state")}
          />
        </TextInput>

        <TextInput gridArea="complement" isOptional htmlFor="complement">
          <input
            id="complement"
            type="text"
            placeholder="Complemento"
            autoComplete="street-address"
            {...register("complement")}
          />
        </TextInput>
      </BillingContent>
    </BillingDetailsCard>
  );
};
