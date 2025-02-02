import { api } from "../../config";
interface GenerarTicketProps {
  name: string;
  barberId: string;
}
interface PropsResponse {
  message: string;
}
export const generarTicket = async (data: GenerarTicketProps): Promise<PropsResponse> => {
  const res = await api.post("/api/generate_ticket/", data);
  return res.data;
};
