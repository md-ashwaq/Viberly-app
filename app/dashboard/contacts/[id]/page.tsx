"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Contact } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Sparkles, Send, Phone, Mail, Loader2 } from "lucide-react";
import { generateReply } from "@/app/actions/ai";

export default function LeadDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const [lead, setLead] = useState<Contact | null>(null);
    const [loading, setLoading] = useState(true);
    const [aiLoading, setAiLoading] = useState(false);
    const [suggestedReply, setSuggestedReply] = useState("");

    useEffect(() => {
        const fetchLead = async () => {
            if (!id) return;
            const docRef = doc(db, "contacts", id as string);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setLead({ id: docSnap.id, ...docSnap.data() } as Contact);
            }
            setLoading(false);
        };
        fetchLead();
    }, [id]);

    const handleGenerateReply = async () => {
        if (!lead) return;
        setAiLoading(true);
        try {
            const reply = await generateReply(lead);
            setSuggestedReply(reply || "No suggestion generated.");
        } catch (error) {
            console.error("AI Error:", error);
            setSuggestedReply("Error generating reply. Please check your API key.");
        } finally {
            setAiLoading(false);
        }
    };

    if (loading) return <div className="p-8">Loading...</div>;
    if (!lead) return <div className="p-8">Lead not found</div>;

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <Button variant="ghost" onClick={() => router.back()} className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Inbox
            </Button>

            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold">{lead.name}</h1>
                    <div className="flex items-center gap-4 mt-2 text-gray-500">
                        <div className="flex items-center gap-1">
                            <Phone className="h-4 w-4" /> {lead.phone}
                        </div>
                        {lead.email && (
                            <div className="flex items-center gap-1">
                                <Mail className="h-4 w-4" /> {lead.email}
                            </div>
                        )}
                    </div>
                </div>
                <Badge className="text-lg px-4 py-1">{lead.status}</Badge>
            </div>

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
                                <p>{lead.source}</p>
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
                                <div className="bg-gray-50 p-3 rounded-md mt-1 text-sm">
                                    {lead.notes.length > 0 ? lead.notes.map((note, i) => (
                                        <p key={i} className="mb-1">• {note}</p>
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
                                Need help following up? Let AI analyze this lead and suggest the perfect WhatsApp message.
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
                                    "Analyze Lead & Suggest Reply"
                                )}
                            </Button>

                            {suggestedReply && (
                                <div className="mt-4 animate-in fade-in slide-in-from-top-2">
                                    <label className="text-sm font-medium text-gray-700">Suggested Reply:</label>
                                    <Textarea
                                        value={suggestedReply}
                                        readOnly
                                        className="mt-2 min-h-[150px] bg-white"
                                    />
                                    <Button className="w-full mt-2 bg-green-600 hover:bg-green-700">
                                        <Send className="mr-2 h-4 w-4" /> Send via WhatsApp
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
