import { queryPython } from "../../config";
import { ClienteEsperaProps } from "../../../../types/clienteCola.types";

export const getClienteEspera = async (): Promise<ClienteEsperaProps[]> => {
  const res = await queryPython("api/get_clients_in_queue/");
  return res;
};
