"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    CheckSquare,
    Settings,
    LogOut,
    Menu,
    BarChart3,
    Megaphone,
    FileText,
    UserCog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ⚠️ PROTOTYPE MODE: No Auth Check
    const user = { email: "demo@viberly.app", displayName: "Demo User" };

    const routes = [
        {
            label: "Inbox",
            icon: LayoutDashboard,
            href: "/dashboard",
            active: pathname === "/dashboard",
        },
        {
            label: "Analytics",
            icon: BarChart3,
            href: "/dashboard/analytics",
            active: pathname === "/dashboard/analytics",
        },
        {
            label: "Campaigns",
            icon: Megaphone,
            href: "/dashboard/campaigns",
            active: pathname === "/dashboard/campaigns",
        },
        {
            label: "Templates",
            icon: FileText,
            href: "/dashboard/templates",
            active: pathname === "/dashboard/templates",
        },
        {
            label: "Team",
            icon: UserCog,
            href: "/dashboard/team",
            active: pathname === "/dashboard/team",
        },
        {
            label: "Contacts",
            icon: Users,
            href: "/dashboard/contacts",
            active: pathname.startsWith("/dashboard/contacts"),
        },
        {
            label: "Tasks",
            icon: CheckSquare,
            href: "/dashboard/tasks",
            active: pathname === "/dashboard/tasks",
        },
        {
            label: "Settings",
            icon: Settings,
            href: "/dashboard/settings",
            active: pathname === "/dashboard/settings",
        },
    ];

    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            {/* Mobile Header */}
            <header className="flex items-center justify-between border-b px-6 py-4 md:hidden">
                <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                    <span className="text-xl text-blue-600">Viberly</span>
                </Link>
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                        <nav className="flex flex-col gap-4 mt-8">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${route.active
                                        ? "bg-blue-100 text-blue-700"
                                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                >
                                    <route.icon className="h-4 w-4" />
                                    {route.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>

            {/* Desktop Sidebar */}
            <aside className="hidden w-64 flex-col border-r bg-gray-50/40 md:flex">
                <div className="flex h-14 items-center border-b px-6">
                    <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                        <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                            <img src="/logo.png" alt="Viberly" className="object-cover" />
                        </div>
                        <span className="text-xl text-blue-600">Viberly</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-4">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${route.active
                                    ? "bg-blue-100 text-blue-700"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                <route.icon className="h-4 w-4" />
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="mt-auto border-t p-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="w-full justify-start gap-2 px-2">
                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                    {user?.displayName?.[0] || "U"}
                                </div>
                                <div className="flex flex-col items-start text-xs">
                                    <span className="font-medium">{user?.displayName}</span>
                                    <span className="text-gray-500 truncate w-32">{user?.email}</span>
                                </div>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                                <LogOut className="mr-2 h-4 w-4" /> Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 md:p-6">
                {children}
            </main>
        </div>
    );
}
