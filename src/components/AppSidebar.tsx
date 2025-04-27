
import { Calendar, Clipboard, Database, FileText, Home, List, User, Users } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Inicio",
      url: "/",
      icon: Home,
    },
    {
      title: "Inventario",
      url: "/inventario",
      icon: Database,
    },
    {
      title: "Ventas",
      url: "/ventas",
      icon: Clipboard,
    },
    {
      title: "Clientes",
      url: "/clientes",
      icon: Users,
    },
    {
      title: "Proveedores",
      url: "/proveedores",
      icon: User,
    },
    {
      title: "Informes",
      url: "/informes",
      icon: FileText,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center px-4 py-2">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">FarmaGestión</span>
          </div>
          <div className="text-xs text-muted-foreground">Sistema de Droguería</div>
        </div>
        <SidebarTrigger className="ml-auto h-8 w-8" />
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                active={location.pathname === item.url}
                className={location.pathname === item.url ? "bg-primary/10 text-primary" : ""}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <Link to={item.url} className="w-full"></Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="px-3 py-2">
        <div className="text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} FarmaGestión
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
