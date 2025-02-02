"use client";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TypographyH2 } from "@/components/ui/TypographyH2";
import { useGetBarbers } from "@/hooks/useGetBarbers";

export const ListaBarberos = () => {
  const { barbers } = useGetBarbers();
  const getStatusColor = (clientCount: number) => {
    if (clientCount === 0) return "bg-green-500";
    if (clientCount <= 2) return "bg-yellow-500";
    return "bg-red-500";
  };
  if (barbers.isLoading) return <div>Cargando...</div>;
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <TypographyH2 text="Lista de barberos" />
        <Button size="icon" variant="default" className="h-10 w-10 bg-green-600 hover:bg-green-800">
          <Plus className="h-6 w-6" />
        </Button>
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {barbers?.data?.length ? (
          barbers.data.map((barber) => (
            <Card key={barber.id} className="flex flex-col items-center p-4 bg-gray-900 text-white">
              <div className={`w-3 h-3 rounded-full self-start ${getStatusColor(barber.clients.length)}`} />
              <Avatar className="size-24 my-2">
                <AvatarImage
                  src={barber.user.image ?? "/placeholder.svg"}
                  alt={`${barber.user.first_name} ${barber.user.last_name}`}
                />
                <AvatarFallback className="text-black text-3xl">
                  {barber.user.first_name[0]}
                  {barber.user.last_name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex  lg:flex-row flex-col lg:justify-between w-full">
                <div className="self-start">
                  <h3 className="font-medium text-lg">
                    {barber.user.first_name} {barber.user.last_name}
                  </h3>
                  <p className="text-sm text-gray-400">Barbero</p>
                </div>
                <Badge variant="secondary" className="mt-2 self-center lg:self-end">
                  {barber.clients.length > 1 || barber.clients.length === 0
                    ? `${barber.clients.length} clientes`
                    : `${barber.clients.length} cliente`}
                </Badge>
              </div>
            </Card>
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <TypographyH2 text="No hay barberos disponibles" />
          </div>
        )}
      </div>
    </div>
  );
};
