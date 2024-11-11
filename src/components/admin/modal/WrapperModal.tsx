"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import React from "react";
export default function ModalWrapper({
  children,
  title,
  button,
}: Readonly<{ children: React.ReactNode; title: string; button: React.ReactNode }>) {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{button}</SheetTrigger>
        <SheetContent side="bottom" className="bg-black rounded-t-3xl h-96 border-none">
          <SheetHeader>
            <SheetTitle className="text-white">{title}</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4 text-white h-full pb-10 flex flex-col">
            <div className="flex flex-col space-y-2 flex-grow">{children}</div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
