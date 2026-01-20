"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  Package,
  ImageIcon,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  Building2,
} from "lucide-react";

interface SidebarProps {
  active: string;
}

export function Sidebar({ active }: SidebarProps) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  }

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutGrid },
    { name: "Company Info", href: "/admin/company", icon: Building2 },
    { name: "Services", href: "/admin/services", icon: Package },
    { name: "Designs", href: "/admin/designs", icon: ImageIcon },
    { name: "Projects", href: "/admin/projects", icon: FileText },
    { name: "Contacts", href: "/admin/contacts", icon: MessageSquare },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">Chuuma CMS</h1>

      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <Button
        onClick={handleLogout}
        variant="outline"
        className="w-full flex items-center gap-2 bg-transparent"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </Button>
    </div>
  );
}

export default Sidebar;
