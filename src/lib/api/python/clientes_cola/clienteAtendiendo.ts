import { ClienteAtendiendoProps } from "@/types/clienteCola.types";
import { api } from "../../config";

export const getClienteAtendiendo = async (): Promise<ClienteAtendiendoProps[]> => {
  const res = await api.get("/api/get_barbers_and_clients/");
  return res.data;
};
