import { api } from "../../config";
import { ClienteEsperaProps } from "../../../../types/clienteCola.types";

export const getClienteEspera = async (): Promise<ClienteEsperaProps[]> => {
  const res = await api.get("/api/get_clients_in_queue/");
  return res.data;
};
