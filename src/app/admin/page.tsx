import { ClientesEspera } from "@/components/admin/ClientesEspera";
import { ListaBarberos } from "@/components/admin/ListaBarberos";
import { Metricas } from "@/components/admin/Metricas";
import { getQueryClient } from "@/lib/api/getQueryClient";
import { getClienteAtendiendo } from "@/lib/api/python/clientes_cola/clienteAtendiendo";
import { getClienteEspera } from "@/lib/api/python/clientes_cola/clienteEspera";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function AdminPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["clientesEnEspera"],
    queryFn: getClienteEspera,
  });
  await queryClient.prefetchQuery({
    queryKey: ["barberos"],
    queryFn: getClienteAtendiendo,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col gap-8 py-4">
        <Metricas />
        <ClientesEspera />
        <ListaBarberos />
      </section>
    </HydrationBoundary>
  );
}
