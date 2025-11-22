"use client";

import { useState, useEffect } from "react";
import { Contact, LeadStatus } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, MessageCircle, Mail } from "lucide-react";
import { AddLeadDialog } from "@/components/add-lead-dialog";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const [leads, setLeads] = useState<Contact[]>([]);
    const [search, setSearch] = useState("");
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) return;

        const q = query(
            collection(db, "contacts"),
            where("userId", "==", user.uid),
            orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const leadsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
                lastInteraction: doc.data().lastInteraction?.toDate(),
                createdAt: doc.data().createdAt?.toDate(),
            })) as Contact[];
            setLeads(leadsData);
        });

        return () => unsubscribe();
    }, [user]);

    const getStatusColor = (status: LeadStatus) => {
        switch (status) {
            case "Lead": return "bg-blue-100 text-blue-800";
            case "Qualified": return "bg-green-100 text-green-800";
            case "Follow-up": return "bg-yellow-100 text-yellow-800";
            case "Closed": return "bg-gray-100 text-gray-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getScoreColor = (score: number) => {
        if (score >= 80) return "text-green-600 font-bold";
        if (score >= 50) return "text-yellow-600 font-medium";
        return "text-red-600";
    };

    const filteredLeads = leads.filter(lead =>
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        (lead.phone && lead.phone.includes(search))
    );

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Inbox</h2>
                    <p className="text-gray-500">Manage your incoming leads and messages.</p>
                </div>
                <AddLeadDialog />
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                        placeholder="Search leads..."
                        className="pl-8"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Source</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>AI Score</TableHead>
                            <TableHead>Last Interaction</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredLeads.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                                    No leads found. Add one to get started!
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredLeads.map((lead) => (
                                <TableRow
                                    key={lead.id}
                                    className="cursor-pointer hover:bg-gray-50"
                                    onClick={() => router.push(`/dashboard/contacts/${lead.id}`)}
                                >
                                    <TableCell className="font-medium">
                                        <div>{lead.name}</div>
                                        <div className="text-xs text-gray-500">{lead.phone}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            {lead.source === "WhatsApp" ? (
                                                <MessageCircle className="h-4 w-4 text-green-500" />
                                            ) : (
                                                <Mail className="h-4 w-4 text-blue-500" />
                                            )}
                                            {lead.source}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className={getStatusColor(lead.status)}>
                                            {lead.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <span className={getScoreColor(lead.aiScore)}>{lead.aiScore}%</span>
                                    </TableCell>
                                    <TableCell>{lead.lastInteraction?.toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">View</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
