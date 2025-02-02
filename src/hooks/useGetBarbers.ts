import { getClienteAtendiendo } from "@/lib/api/python/clientes_cola/clienteAtendiendo";
import { useQuery } from "@tanstack/react-query";

export const useGetBarbers = () => {
  const barbers = useQuery({
    queryKey: ["barberos"],
    queryFn: getClienteAtendiendo,
  });
  return { barbers };
};
