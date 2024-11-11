"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";

export const ModalEliminarCliente = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full flex items-start flex-col px-2">
          <div className="flex gap-2">
            <Trash className="mr-2 h-4 w-4" />
            Eliminar
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black text-white border-none">
        <DialogHeader className="w-4/5 mx-auto">
          <DialogTitle>¿Estás seguro de que deseas eliminar este cliente?</DialogTitle>
          <DialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente el cliente de la base de datos.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" variant="destructive">
            Aceptar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
