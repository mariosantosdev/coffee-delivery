import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CartDetails } from "./components/CartDetails";
import { CheckoutDetails } from "./components/CheckoutDetails";
import { CheckoutContainer } from "./styles";
import { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

const checkoutSchema = z.object({
  street: z
    .string()
    .min(2, "Preencha uma rua válida")
    .max(100, "A rua deve conter no máximo 100 caracteres"),
  number: z
    .number({ invalid_type_error: "Número inválido" })
    .min(1, "O número deve ser maior que 0"),
  neighborhood: z
    .string()
    .min(2, "Preencha um bairro válido")
    .max(100, "O bairro deve conter no máximo 100 catacteres"),
  postalCode: z
    .string()
    .min(9, "CEP inválido")
    .max(9, "CEP inválido")
    .regex(/^\d{5}-\d{3}$/, "CEP inválido"),
  city: z
    .string()
    .min(3, "Preencha uma cidade válida")
    .max(100, "A cidade deve conter no máximo 100 caracteres"),
  state: z.string().min(2, "UF inválido").max(2, "UF inválido"),
  complement: z.string().optional(),
  payments: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Selecione uma forma de pagamento",
  }),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

export function CheckoutPage() {
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.entries(errors)
        .slice(0, 1)
        .forEach(([key, error]) => {
          if (error.message)
            toast.error(error.message, {
              id: key,
              duration: 3000,
            });
        });
    }
  }, [errors]);

  return (
    <FormProvider {...form}>
      <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
        <CheckoutDetails />

        <CartDetails />
      </CheckoutContainer>
    </FormProvider>
  );
}
