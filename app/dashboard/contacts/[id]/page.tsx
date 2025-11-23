"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Contact } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Sparkles, Send, Phone, Mail, Loader2, MessageCircle } from "lucide-react";

// ⚠️ MOCK DATA FOR PROTOTYPE
const MOCK_LEAD: Contact = {
    id: "1",
    userId: "user1",
    name: "Rahul Sharma",
    phone: "+919876543210",
    email: "rahul@example.com",
    source: "WhatsApp",
    status: "Lead",
    aiScore: 85,
    notes: ["Interested in premium plan", "Asked for discount"],
    lastInteraction: new Date(),
    createdAt: new Date(),
};

export default function LeadDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const [lead, setLead] = useState<Contact | null>(null);
    const [loading, setLoading] = useState(true);
    const [aiLoading, setAiLoading] = useState(false);
    const [suggestedReply, setSuggestedReply] = useState("");

    useEffect(() => {
        // Simulate fetch
        setTimeout(() => {
            setLead(MOCK_LEAD);
            setLoading(false);
        }, 500);
    }, [id]);

    const handleGenerateReply = async () => {
        setAiLoading(true);
        // Simulate AI delay
        setTimeout(() => {
            setSuggestedReply("Hello Rahul, thanks for your interest in the Premium Plan! I can offer you a 10% discount if you sign up this week. Would you like me to send the payment link?");
            setAiLoading(false);
        }, 1500);
    };

    const handleWhatsApp = () => {
        if (lead) {
            window.open(`https://wa.me/${lead.phone.replace(/\D/g, '')}`, '_blank');
        }
    };

    const handleCall = () => {
        if (lead) {
            window.location.href = `tel:${lead.phone}`;
        }
    };

    if (loading) return <div className="p-8 flex justify-center"><Loader2 className="animate-spin h-8 w-8 text-blue-600" /></div>;
    if (!lead) return <div className="p-8">Lead not found</div>;

    return (
        <div className="space-y-6 max-w-4xl mx-auto pb-20">
            <Button variant="ghost" onClick={() => router.back()} className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Inbox
            </Button>

            {/* Header Card */}
            <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">{lead.name}</h1>
                            <div className="flex items-center gap-4 mt-2 text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Phone className="h-4 w-4" /> {lead.phone}
                                </div>
                            </div>
                        </div>
                        <Badge className="text-lg px-4 py-1">{lead.status}</Badge>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <Button
                            className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg"
                            onClick={handleWhatsApp}
                        >
                            <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 h-12 text-lg"
                            onClick={handleCall}
                        >
                            <Phone className="mr-2 h-5 w-5" /> Call
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column: Lead Info */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Lead Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-500">Source</label>
                                <div className="flex items-center gap-2 mt-1">
                                    <MessageCircle className="h-4 w-4 text-green-500" />
                                    <span>{lead.source}</span>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">AI Score</label>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-blue-600">{lead.aiScore}</span>
                                    <span className="text-sm text-gray-400">/ 100</span>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">Notes</label>
                                <div className="bg-gray-50 p-3 rounded-md mt-1 text-sm space-y-2">
                                    {lead.notes.length > 0 ? lead.notes.map((note, i) => (
                                        <p key={i} className="border-b border-gray-200 last:border-0 pb-1 last:pb-0">• {note}</p>
                                    )) : "No notes yet."}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: AI Action */}
                <div className="space-y-6">
                    <Card className="border-blue-200 bg-blue-50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-blue-700">
                                <Sparkles className="h-5 w-5" /> AI Assistant
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-blue-600">
                                Generate a personalized follow-up message in Hinglish.
                            </p>
                            <Button
                                onClick={handleGenerateReply}
                                className="w-full bg-blue-600 hover:bg-blue-700"
                                disabled={aiLoading}
                            >
                                {aiLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                                    </>
                                ) : (
                                    "Generate Follow-up Script"
                                )}
                            </Button>

                            {suggestedReply && (
                                <div className="mt-4 animate-in fade-in slide-in-from-top-2">
                                    <label className="text-sm font-medium text-gray-700">Suggested Reply:</label>
                                    <Textarea
                                        value={suggestedReply}
                                        readOnly
                                        className="mt-2 min-h-[120px] bg-white border-blue-200"
                                    />
                                    <Button
                                        className="w-full mt-2 bg-green-600 hover:bg-green-700"
                                        onClick={() => window.open(`https://wa.me/${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(suggestedReply)}`, '_blank')}
                                    >
                                        <Send className="mr-2 h-4 w-4" /> Send on WhatsApp
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
