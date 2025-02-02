"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { agregarClienteSchema, AgregarClienteSchema } from "@/schemas/form/agregarCliente.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { SelectGroup, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useGetBarbers } from "@/hooks/useGetBarbers";
import { Input } from "@/components/ui/input";
import { useMutationTicket } from "@/hooks/useMutationTicket";
export const FormAgregarCliente = () => {
  const form = useForm<AgregarClienteSchema>({
    resolver: zodResolver(agregarClienteSchema),
    defaultValues: {
      name: "",
      barberId: "waiting",
    },
  });
  const { barbers } = useGetBarbers();
  const mutationTicket = useMutationTicket();
  const onSubmit = (data: AgregarClienteSchema) => {
    mutationTicket.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <Form {...form}>
      <form className="mt-4 space-y-4 text-white h-full pb-10 flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-6 flex-1">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del cliente</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre del cliente" variant="outline" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="barberId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seleccionar barbero</FormLabel>
                <FormControl>
                  <SelectGroup>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Esperar Turno" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="waiting">Esperar Turno</SelectItem>
                        {barbers?.data?.length ? (
                          barbers.data.map((barber) => (
                            <SelectItem key={barber.id} value={barber.id.toString()}>
                              {barber.user.first_name} {barber.user.last_name}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="waiting">No hay barberos disponibles</SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </SelectGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full bg-green-600 hover:bg-green-700">Agregar</Button>
      </form>
    </Form>
  );
};
