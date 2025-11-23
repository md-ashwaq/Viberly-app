"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail, Plus, Play, Pause, BarChart3 } from "lucide-react";

export default function CampaignsPage() {
    const [campaigns] = useState([
        {
            id: 1,
            name: "New Year Property Deals",
            type: "WhatsApp",
            status: "Active",
            sent: 1243,
            delivered: 1198,
            opened: 876,
            replied: 234,
            converted: 45,
            schedule: "Daily at 10:00 AM",
            icon: MessageCircle,
            color: "green"
        },
        {
            id: 2,
            name: "Re-engagement Campaign",
            type: "Email",
            status: "Active",
            sent: 2850,
            delivered: 2789,
            opened: 1456,
            replied: 389,
            converted: 78,
            schedule: "Every Monday & Thursday",
            icon: Mail,
            color: "blue"
        },
        {
            id: 3,
            name: "Product Launch Announcement",
            type: "WhatsApp",
            status: "Scheduled",
            sent: 0,
            delivered: 0,
            opened: 0,
            replied: 0,
            converted: 0,
            schedule: "Dec 25, 2025 at 9:00 AM",
            icon: MessageCircle,
            color: "yellow"
        },
        {
            id: 4,
            name: "Follow-up Sequence",
            type: "SMS",
            status: "Paused",
            sent: 567,
            delivered: 551,
            opened: 412,
            replied: 98,
            converted: 23,
            schedule: "3 days after inquiry",
            icon: MessageCircle,
            color: "gray"
        }
    ]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active": return "bg-green-50 text-green-700 border-green-200";
            case "Scheduled": return "bg-yellow-50 text-yellow-700 border-yellow-200";
            case "Paused": return "bg-gray-50 text-gray-700 border-gray-200";
            default: return "bg-gray-50 text-gray-600";
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Campaigns</h2>
                    <p className="text-sm text-gray-500">Automate your outreach and track performance</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                    <Plus className="h-4 w-4" /> Create Campaign
                </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-4">
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="text-2xl font-bold">4</div>
                        <p className="text-sm text-gray-500">Total Campaigns</p>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="text-2xl font-bold text-green-600">4,660</div>
                        <p className="text-sm text-gray-500">Messages Sent</p>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600">52.4%</div>
                        <p className="text-sm text-gray-500">Avg Open Rate</p>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="text-2xl font-bold text-purple-600">146</div>
                        <p className="text-sm text-gray-500">Total Conversions</p>
                    </CardContent>
                </Card>
            </div>

            {/* Campaigns List */}
            <div className="space-y-4">
                {campaigns.map((campaign) => (
                    <Card key={campaign.id} className="bg-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-4">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl bg-${campaign.color}-50`}>
                                    <campaign.icon className={`h-6 w-6 text-${campaign.color}-600`} />
                                </div>
                                <div>
                                    <CardTitle className="text-lg">{campaign.name}</CardTitle>
                                    <p className="text-sm text-gray-500 mt-1">{campaign.schedule}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Badge className={getStatusColor(campaign.status)}>
                                    {campaign.status}
                                </Badge>
                                <Button variant="outline" size="sm" className="gap-2">
                                    {campaign.status === "Paused" ? (
                                        <><Play className="h-4 w-4" /> Resume</>
                                    ) : (
                                        <><Pause className="h-4 w-4" /> Pause</>
                                    )}
                                </Button>
                                <Button variant="outline" size="sm" className="gap-2">
                                    <BarChart3 className="h-4 w-4" /> View Details
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-6 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold">{campaign.sent.toLocaleString()}</div>
                                    <p className="text-xs text-gray-500">Sent</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-green-600">{campaign.delivered.toLocaleString()}</div>
                                    <p className="text-xs text-gray-500">Delivered</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-600">{campaign.opened.toLocaleString()}</div>
                                    <p className="text-xs text-gray-500">Opened</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-purple-600">{campaign.replied.toLocaleString()}</div>
                                    <p className="text-xs text-gray-500">Replied</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-yellow-600">{campaign.converted}</div>
                                    <p className="text-xs text-gray-500">Converted</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">
                                        {campaign.sent > 0 ? ((campaign.converted / campaign.sent) * 100).toFixed(1) : 0}%
                                    </div>
                                    <p className="text-xs text-gray-500">Conv. Rate</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Campaign Templates */}
            <Card className="bg-white">
                <CardHeader>
                    <CardTitle>Quick Start Templates</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 border rounded-lg hover:border-blue-600 transition-colors cursor-pointer">
                            <h4 className="font-semibold mb-2">📧 Welcome Series</h4>
                            <p className="text-sm text-gray-500">3-email sequence for new subscribers</p>
                        </div>
                        <div className="p-4 border rounded-lg hover:border-blue-600 transition-colors cursor-pointer">
                            <h4 className="font-semibold mb-2">💬 Re-engagement</h4>
                            <p className="text-sm text-gray-500">Win back inactive leads</p>
                        </div>
                        <div className="p-4 border rounded-lg hover:border-blue-600 transition-colors cursor-pointer">
                            <h4 className="font-semibold mb-2">🎯 Product Launch</h4>
                            <p className="text-sm text-gray-500">Announce new products to your list</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
