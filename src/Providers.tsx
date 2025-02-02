"use client";
import { useState } from "react";
import { SidebarProvider } from "./components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  const [open, setOpen] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <Toaster richColors position="top-center" />
        {children}
      </SidebarProvider>
    </QueryClientProvider>
  );
}
