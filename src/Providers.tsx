"use client";
import { useState } from "react";
import { SidebarProvider } from "./components/ui/sidebar";
export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      {children}
    </SidebarProvider>
  );
}
