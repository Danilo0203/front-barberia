import { ClienteAtendiendoProps } from "@/types/clienteCola.types";
import React from "react";
import { TypographyH2 } from "@/components/ui/TypographyH2";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const ClienteAtendiendo = ({ barberos }: { barberos: ClienteAtendiendoProps[] }) => {
  return (
    <article className="space-y-24 flex-grow flex flex-col">
      <TypographyH2 text="Atendiendo:" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-8 flex-grow ">
        {barberos.slice(0, 4).map(({ id, user, clients }) => (
          <Card key={id} className="bg-[#FF3E1D] text-white rounded-lg flex flex-grow h-96">
            <CardContent className={`p-4 h-full flex flex-col flex-grow relative`}>
              <div className="absolute flex flex-col items-center top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <Avatar className="size-28">
                  {user.image ? (
                    <AvatarImage src={user.image} alt={`${user.first_name} ${user.last_name}`} />
                  ) : (
                    <AvatarFallback className="text-black text-3xl font-semibold">
                      {user.first_name[0]}
                      {user.last_name[0]}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="mt-2 text-2xl font-bold">{`${user.first_name} ${user.last_name}`}</div>
              </div>
              <div className="flex-grow mt-16 space-y-4 flex flex-col">
                {clients.map((client, index) => (
                  <Badge
                    key={client.id}
                    className={`w-full text-2xl flex-grow font-medium rounded-3xl relative ${
                      index === 0 ? "bg-[#4F7942] hover:bg-[#45693A]" : "bg-[#FF5B3E] hover:bg-[#E54E35]"
                    }`}
                    style={{ height: "10px" }}
                  >
                    <Badge className="absolute top-2 right-2 bg-black bg-opacity-60 font-thin">
                      {client.in_queue ? "Atendiendo" : "En espera"}
                    </Badge>
                    {client.name}
                  </Badge>
                ))}
                {/* Add empty spaces for remaining clients */}
                {Array.from({ length: 3 - clients.length }).map((_, index) => (
                  <Badge
                    key={`empty-${index}`}
                    className="w-full text-xl flex-grow font-medium rounded-3xl bg-[#FF5B3E] hover:bg-[#E54E35] opacity-50"
                  >
                    {/* Empty Badge */}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </article>
  );
};
