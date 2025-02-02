import { z } from "zod";

export const agregarClienteSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es requerido",
    })
    .min(1, {
      message: "El nombre es requerido",
    }),
  barberId: z.string().min(1, {
    message: "El barbero es requerido",
  }),
});

export type AgregarClienteSchema = z.infer<typeof agregarClienteSchema>;
