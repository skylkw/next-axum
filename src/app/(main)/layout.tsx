import AppHeader from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {children}
      </main>
    
      </SidebarInset>
    </SidebarProvider>
  );
}
