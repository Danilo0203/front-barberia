"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { Edit } from "lucide-react";

export const ModalEditarCliente = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="w-full flex items-start flex-col px-2">
          <div className="flex gap-2">
            <Edit className="h-6 w-6" />
            Editar
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-black rounded-t-3xl h-96 border-none">
        <SheetHeader>
          <SheetTitle className="text-white">Editar Cliente</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4 text-white h-full pb-10 flex flex-col">
          <div className="flex flex-col space-y-2 flex-grow">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre del cliente</Label>
              <Input id="name" placeholder="Nombre del cliente" variant="outline" />
            </div>
            <div className="space-y-2">
              <SelectGroup>
                <SelectLabel className="my-2">Reasignar barbero</SelectLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Esperar Turno" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="waiting">Esperar Turno</SelectItem>
                    {/* {barberos.map((barber) => (
                      <SelectItem key={barber.id} value={barber.id.toString()}>
                        {barber.user.first_name} {barber.user.last_name}
                      </SelectItem>
                    ))} */}
                  </SelectContent>
                </Select>
              </SelectGroup>
            </div>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">Editar</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
