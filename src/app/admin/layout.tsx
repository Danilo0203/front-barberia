import { AppSidebar } from "@/components/sidebar.tsx/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SidebarHeader } from "@/components/sidebar.tsx/sidebar-header";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SidebarInset>
        <SidebarHeader />
        <main className={`container mx-auto px-4`}>{children}</main>
      </SidebarInset>
      <AppSidebar side="right" />
    </>
  );
}
