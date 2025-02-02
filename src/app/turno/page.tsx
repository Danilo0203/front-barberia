import { ClienteAtendiendo } from "@/components/turno/ClienteAtendiendo";
import { ClienteEspera } from "@/components/turno/ClienteEspera";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import { getClienteAtendiendo } from "@/lib/api/python/clientes_cola/clienteAtendiendo";
import { getClienteEspera } from "@/lib/api/python/clientes_cola/clienteEspera";

export default async function TurnoPage() {
  const clienteEspera = await getClienteEspera();
  const clienteAtendiendo = await getClienteAtendiendo();

  return (
    <>
      <section className="relative min-h-dvh flex flex-col z-10 container mx-auto px-4 text-white py-5">
        <header className="ml-auto">
          <TypographyH1 text="Barbería" />
        </header>
        <div className="flex flex-col gap-5 flex-grow">
          <ClienteEspera clientes={clienteEspera} />
          <ClienteAtendiendo barberos={clienteAtendiendo} />
        </div>
      </section>
      <div className="absolute bg-black/50 backdrop-blur-sm inset-0 min-h-dvh"></div>
    </>
  );
}
