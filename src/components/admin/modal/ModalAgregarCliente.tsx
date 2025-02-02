import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { FormAgregarCliente } from "../form/form-agregar-cliente";
export const ModalAgregarCliente = () => {
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
        <FormAgregarCliente />
      </SheetContent>
    </Sheet>
  );
};
