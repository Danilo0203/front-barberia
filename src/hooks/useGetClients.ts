import { getClienteEspera } from "@/lib/api/python/clientes_cola/clienteEspera";
import { useQuery } from "@tanstack/react-query";

export const useGetClients = () => {
  const clients = useQuery({
    queryKey: ["clientesEnEspera"],
    queryFn: getClienteEspera,
  });
  return { clients };
};
