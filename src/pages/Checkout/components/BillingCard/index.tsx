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
        <TextInput
          placeholder="CEP"
          gridArea="cep"
          {...register("postalCode")}
        />
        <TextInput
          placeholder="Rua"
          gridArea="street"
          {...register("street")}
        />
        <TextInput
          type="number"
          placeholder="Número"
          gridArea="number"
          {...register("number", { valueAsNumber: true })}
        />
        <TextInput
          placeholder="Complemento"
          gridArea="complement"
          isOptional
          {...register("complement")}
        />
        <TextInput
          placeholder="Bairro"
          gridArea="neighborhood"
          {...register("neighborhood")}
        />
        <TextInput placeholder="Cidade" gridArea="city" {...register("city")} />
        <TextInput placeholder="UF" gridArea="state" {...register("state")} />
      </BillingContent>
    </BillingDetailsCard>
  );
};
