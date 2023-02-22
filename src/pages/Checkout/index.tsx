import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CartDetails } from "./components/CartDetails";
import { CheckoutDetails } from "./components/CheckoutDetails";
import { CheckoutContainer } from "./styles";

type CheckoutFormData = {
  postalCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  payments: "credit" | "debit" | "cash";
};

export function CheckoutPage() {
  const form = useForm<CheckoutFormData>();
  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
        <CheckoutDetails />

        <CartDetails />
      </CheckoutContainer>
    </FormProvider>
  );
}
