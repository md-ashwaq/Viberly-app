"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Contact, LeadStatus } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, MessageCircle, Phone, Calendar, User } from "lucide-react";
import { AddLeadDialog } from "@/components/add-lead-dialog";
import { useRouter } from "next/navigation";

// ⚠️ MOCK DATA FOR PROTOTYPE
const MOCK_LEADS: Contact[] = [
    {
        id: "1",
        userId: "user1",
        name: "Rahul Sharma",
        phone: "+919876543210",
        source: "WhatsApp",
        status: "Lead",
        aiScore: 85,
        notes: ["Interested in premium plan"],
        lastInteraction: new Date(),
        createdAt: new Date(),
    },
    {
        id: "2",
        userId: "user1",
        name: "Priya Singh",
        email: "priya@example.com",
        phone: "+919876512345",
        source: "Web",
        status: "Qualified",
        aiScore: 60,
        notes: ["Requested demo"],
        lastInteraction: new Date(Date.now() - 86400000), // 1 day ago
        createdAt: new Date(),
    },
    {
        id: "3",
        userId: "user1",
        name: "Amit Patel",
        phone: "+919988776655",
        source: "WhatsApp",
        status: "Follow-up",
        aiScore: 40,
        notes: ["Price negotiation"],
        lastInteraction: new Date(Date.now() - 172800000), // 2 days ago
        createdAt: new Date(),
    },
    {
        id: "4",
        userId: "user1",
        name: "Sneha Gupta",
        phone: "+919123456789",
        source: "Web",
        status: "Closed",
        aiScore: 95,
        notes: ["Paid for annual subscription"],
        lastInteraction: new Date(Date.now() - 432000000), // 5 days ago
        createdAt: new Date(),
    },
];

export default function DashboardPage() {
    const [leads, setLeads] = useState<Contact[]>(MOCK_LEADS);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const router = useRouter();

    const getStatusColor = (status: LeadStatus) => {
        switch (status) {
            case "Lead": return "bg-blue-100 text-blue-800 border-blue-200";
            case "Qualified": return "bg-green-100 text-green-800 border-green-200";
            case "Follow-up": return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "Closed": return "bg-gray-100 text-gray-800 border-gray-200";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const handleWhatsApp = (e: React.MouseEvent, phone: string) => {
        e.stopPropagation();
        window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
    };

    const handleCall = (e: React.MouseEvent, phone: string) => {
        e.stopPropagation();
        window.location.href = `tel:${phone}`;
    };

    const filteredLeads = leads.filter(lead => {
        const matchesSearch = lead.name.toLowerCase().includes(search.toLowerCase()) ||
            (lead.phone && lead.phone.includes(search));

        if (filter === "all") return matchesSearch;
        if (filter === "leads") return matchesSearch && lead.status === "Lead";
        if (filter === "follow-up") return matchesSearch && lead.status === "Follow-up";
        return matchesSearch;
    });

    return (
        <div className="space-y-4 pb-20 md:pb-0">
            {/* Header */}
            <div className="flex items-center justify-between sticky top-0 bg-gray-100/95 backdrop-blur z-10 py-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Inbox</h2>
                    <p className="text-sm text-gray-500">{filteredLeads.length} Leads</p>
                </div>
                <AddLeadDialog />
            </div>

            {/* Search & Filter */}
            <div className="space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search name or phone..."
                        className="pl-9 bg-white border-gray-200"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <Tabs defaultValue="all" onValueChange={setFilter} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="leads">New Leads</TabsTrigger>
                        <TabsTrigger value="follow-up">Follow-up</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {/* Animated Card List */}
            <motion.div
                layout
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
                <AnimatePresence mode="popLayout">
                    {filteredLeads.map((lead) => (
                        <motion.div
                            key={lead.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card
                                className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-blue-500"
                                onClick={() => router.push(`/dashboard/contacts/${lead.id}`)}
                            >
                                <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between space-y-0">
                                    <div>
                                        <h3 className="font-bold text-lg">{lead.name}</h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                            {lead.source === "WhatsApp" ? (
                                                <MessageCircle className="h-3 w-3 text-green-600" />
                                            ) : (
                                                <User className="h-3 w-3 text-blue-600" />
                                            )}
                                            {lead.source}
                                        </div>
                                    </div>
                                    <Badge variant="outline" className={getStatusColor(lead.status)}>
                                        {lead.status}
                                    </Badge>
                                </CardHeader>

                                <CardContent className="p-4 pt-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                        <Calendar className="h-3 w-3" />
                                        <span>Last: {lead.lastInteraction.toLocaleDateString()}</span>
                                    </div>
                                    {lead.notes.length > 0 && (
                                        <p className="text-sm text-gray-600 line-clamp-2 bg-gray-50 p-2 rounded">
                                            "{lead.notes[0]}"
                                        </p>
                                    )}
                                </CardContent>

                                <CardFooter className="p-2 bg-gray-50 grid grid-cols-2 gap-2">
                                    <Button
                                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                                        onClick={(e) => handleWhatsApp(e, lead.phone)}
                                    >
                                        <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
                                        onClick={(e) => handleCall(e, lead.phone)}
                                    >
                                        <Phone className="mr-2 h-4 w-4" /> Call
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredLeads.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    <p>No leads found.</p>
                </div>
            )}
        </div>
    );
}
