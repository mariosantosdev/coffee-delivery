import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { RadioInput } from "~/components/RadioInput";
import {
  CardSubtitle,
  CardTitle,
  PaymentDetailsCard,
  PaymentsHeader,
  PaymentMethods,
} from "./styles";

type CheckoutPaymentsFormData = {
  payments: "credit" | "debit" | "cash";
};

export const PaymentsCard = () => {
  const { register, watch } = useFormContext<CheckoutPaymentsFormData>();

  return (
    <PaymentDetailsCard>
      <PaymentsHeader>
        <CurrencyDollar size={22} />
        <div className="card-header__texts">
          <CardTitle>Forma de pagamento</CardTitle>
          <CardSubtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </CardSubtitle>
        </div>
      </PaymentsHeader>

      <PaymentMethods>
        <RadioInput
          id="payments-credit"
          label="Cartão de crédito"
          icon={<CreditCard />}
          isActive={watch("payments") === "credit"}
        >
          <input {...register("payments")} type="radio" value="credit" />
        </RadioInput>

        <RadioInput
          id="payments-debit"
          label="Cartão de débito"
          icon={<Bank />}
          isActive={watch("payments") === "debit"}
        >
          <input {...register("payments")} type="radio" value="debit" />
        </RadioInput>

        <RadioInput
          id="payments-cash"
          label="Dinheiro"
          icon={<Money />}
          isActive={watch("payments") === "cash"}
        >
          <input {...register("payments")} type="radio" value="cash" />
        </RadioInput>
      </PaymentMethods>
    </PaymentDetailsCard>
  );
};
