"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Smartphone } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "New Lead Automations",
        href: "/features",
        description: "Instantly receive and process leads from any source.",
    },
    {
        title: "Bulk Lead Engagement",
        href: "/features",
        description: "Send personalized messages to multiple leads at once.",
    },
    {
        title: "Lead Distribution",
        href: "/features",
        description: "Automatically assign leads to your sales team.",
    },
    {
        title: "File Tracking",
        href: "/features",
        description: "Track when leads open your files and proposals.",
    },
];

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#111827]/95 backdrop-blur supports-[backdrop-filter]:bg-[#111827]/60">
            <div className="container flex h-20 items-center justify-between px-4 md:px-6 mx-auto max-w-7xl">
                <div className="flex items-center gap-8">
                    <Link className="flex items-center justify-center gap-2" href="/">
                        <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                            <Image
                                src="/logo.png"
                                alt="Viberly Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="font-bold text-2xl tracking-tight text-white">Viberly</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white data-[active]:bg-gray-800 data-[state=open]:bg-gray-800">
                                        Product
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-[#1F2937] border-gray-700">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-900/50 to-blue-900/20 p-6 no-underline outline-none focus:shadow-md"
                                                        href="/features"
                                                    >
                                                        <Smartphone className="h-6 w-6 text-blue-400" />
                                                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                            Mobile CRM
                                                        </div>
                                                        <p className="text-sm leading-tight text-gray-400">
                                                            Run your entire sales process from your phone. No laptop needed.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/features" title="Features">
                                                Explore all powerful features.
                                            </ListItem>
                                            <ListItem href="/integrations" title="Integrations">
                                                Connect with Facebook, TikTok, and more.
                                            </ListItem>
                                            <ListItem href="/pricing" title="Pricing">
                                                Simple plans for every team size.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white data-[active]:bg-gray-800 data-[state=open]:bg-gray-800">
                                        Integrations
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#1F2937] border-gray-700">
                                            {components.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white data-[active]:bg-gray-800 data-[state=open]:bg-gray-800">
                                        Resources
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-[#1F2937] border-gray-700">
                                            <ListItem href="/blog" title="Blog">
                                                Latest tips and tricks for sales.
                                            </ListItem>
                                            <ListItem href="/case-studies" title="Case Studies">
                                                See how others grow with Viberly.
                                            </ListItem>
                                            <ListItem href="/help" title="Help Guide">
                                                Documentation and support.
                                            </ListItem>
                                            <ListItem href="/about" title="About Us">
                                                Learn about our mission and values.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Login
                    </Link>
                    <Link href="/dashboard">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 h-10">
                            Sign Up Free
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="md:hidden text-white">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none text-gray-200">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
