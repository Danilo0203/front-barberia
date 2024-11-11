import { ClienteAtendiendoProps } from "@/types/clienteCola.types";
import { queryPython } from "../../config";

export const getClienteAtendiendo = async (): Promise<ClienteAtendiendoProps[]> => {
  const res = queryPython("/api/get_barbers_and_clients/");
  return res;
};
