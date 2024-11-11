import { ClienteEsperaProps } from "@/types/clienteCola.types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypographyH2 } from "../ui/TypographyH2";

export const ClienteEspera = ({ clientes }: { clientes: ClienteEsperaProps[] }) => {
  return (
    <article className="space-y-6">
      <TypographyH2 text="En Espera:" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {clientes.slice(0, 3).map(({ id, name, in_queue }) => (
          <Card key={id} className="bg-gray-600 bg-opacity-80 py-1 rounded-3xl relative">
            <CardContent className="p-4 flex justify-between items-center ">
              <span className="text-white text-2xl font-light">{name}</span>
              <Badge variant="custom" className="absolute top-2 right-2">
                {in_queue && "Espera"}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </article>
  );
};
