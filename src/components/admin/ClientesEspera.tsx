"use client";
import { Button } from "../ui/button";
import { MoreVertical } from "lucide-react";
import { Card } from "../ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { TypographyH2 } from "../ui/TypographyH2";
import { ModalAgregarCliente } from "./modal/ModalAgregarCliente";
import { ModalEditarCliente } from "./modal/ModalEditarCliente";
import React from "react";
import { ModalEliminarCliente } from "./modal/ModalEliminarCliente";
import { useGetClients } from "@/hooks/useGetClients";
export const ClientesEspera = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  };
  const { clients } = useGetClients();
  if (clients.isLoading) return <div>Cargando...</div>;
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <TypographyH2 text="Clientes en espera" />
        <ModalAgregarCliente />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clients?.data?.length ? (
          clients.data.map((client) => (
            <Card key={client.id} className="flex items-center justify-between p-4 bg-gray-900 text-white">
              <div>
                <p className="font-medium text-lg">{client.name}</p>
                <p className="text-sm text-gray-400">
                  En espera de turno desde: {formatDate(client.created_at.toString())}
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <ModalEditarCliente />
                  <ModalEliminarCliente />
                </DropdownMenuContent>
              </DropdownMenu>
            </Card>
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <TypographyH2 text="No hay clientes en espera" className="text-destructive" />
          </div>
        )}
      </div>
    </div>
  );
};
