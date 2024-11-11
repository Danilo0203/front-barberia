import React from "react";
import { Card } from "@/components/ui/card";
import { TypographyH2 } from "../ui/TypographyH2";

export const Metricas = () => {
  return (
    <div className="space-y-4">
      <TypographyH2 text="Métricas" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden rounded-3xl bg-gradient-to-br from-orange-400 to-red-400">
          <div className="p-6 text-center text-white">
            <div className="text-6xl font-bold">100</div>
            <div className="mt-2 text-sm">
              Total de clientes
              <br />
              atendidos hoy
            </div>
          </div>
        </Card>
        <Card className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-green-700">
          <div className="p-6 text-center text-white">
            <div className="text-6xl font-bold">4</div>
            <div className="mt-2 text-sm">
              Total de clientes
              <br />
              en espera
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
