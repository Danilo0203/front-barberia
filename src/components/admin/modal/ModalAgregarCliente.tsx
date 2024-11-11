"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ClienteAtendiendoProps } from "@/types/clienteCola.types";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { Plus } from "lucide-react";

export const ModalAgregarCliente = ({ barberos }: { barberos: ClienteAtendiendoProps[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="default" className="h-10 w-10 bg-green-600 hover:bg-green-800">
          <Plus className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-black rounded-t-3xl h-96 border-none">
        <SheetHeader>
          <SheetTitle className="text-white">Agregar Cliente</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4 text-white h-full pb-10 flex flex-col">
          <div className="flex flex-col space-y-2 flex-grow">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre del cliente</Label>
              <Input id="name" placeholder="Nombre del cliente" variant="outline" />
            </div>
            <div className="space-y-2">
              <SelectGroup>
                <SelectLabel className="my-2">Seleccionar barbero</SelectLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Esperar Turno" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="waiting">Esperar Turno</SelectItem>
                    {barberos.map((barber) => (
                      <SelectItem key={barber.id} value={barber.id.toString()}>
                        {barber.user.first_name} {barber.user.last_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </SelectGroup>
            </div>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">Agregar</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
