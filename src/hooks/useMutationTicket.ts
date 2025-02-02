import { useMutation, useQueryClient } from "@tanstack/react-query";
import { generarTicket } from "@/lib/api/python/generar_tickets/generarTicket";
import { toast } from "sonner";

export const useMutationTicket = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: generarTicket,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["clientesEnEspera"] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutation;
};
