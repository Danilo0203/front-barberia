"use client";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { NavUser } from "./nav-user";
import { cn } from "@/lib/utils";

export const SidebarHeader = () => {
  const { isMobile } = useSidebar();
  return (
    <header className="flex shrink-0 items-center justify-center gap-2 border-b px-4 sticky top-0 left-0 right-0 z-10 bg-white bg-opacity-95">
      <NavUser user={{ name: "John Doe", email: "john@example.com", avatar: "/avatar.png" }} />
      <Breadcrumb className={cn(isMobile && "hidden")}>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
    </header>
  );
};
