import { ClientesEspera } from "@/components/admin/ClientesEspera";
import { ListaBarberos } from "@/components/admin/ListaBarberos";
import { Metricas } from "@/components/admin/Metricas";
import { getClienteAtendiendo } from "@/lib/api/python/clientes_cola/clienteAtendiendo";
import { getClienteEspera } from "@/lib/api/python/clientes_cola/clienteEspera";

export default async function AdminPage() {
  const clientesEnEspera = await getClienteEspera();
  const barberos = await getClienteAtendiendo();
  return (
    <section className="flex flex-col gap-8 py-4">
      <Metricas />
      <ClientesEspera clients={clientesEnEspera} barberos={barberos} />
      <ListaBarberos barberos={barberos} />
    </section>
  );
}
