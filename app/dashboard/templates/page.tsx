"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Copy, Edit, Trash2, MessageCircle, Mail, FileText } from "lucide-react";

export default function TemplatesPage() {
    const templates = [
        {
            id: 1,
            name: "Welcome Message",
            type: "WhatsApp",
            category: "Onboarding",
            usage: 1243,
            conversion: 38.5,
            message: "Hi {{name}}! 👋 Thanks for your interest. I'm here to help you find your perfect solution. When's a good time to chat?",
            icon: MessageCircle,
            color: "green"
        },
        {
            id: 2,
            name: "Follow-up Day 3",
            type: "Email",
            category: "Follow-up",
            usage: 856,
            conversion: 24.2,
            message: "Hi {{name}}, Just checking in on your inquiry from {{days_ago}} days ago. Any questions I can help with?",
            icon: Mail,
            color: "blue"
        },
        {
            id: 3,
            name: "Property Details",
            type: "WhatsApp",
            category: "Sales",
            usage: 534,
            conversion: 42.8,
            message: "🏠 Property Details:\n📍 {{location}}\n💰 Price: {{price}}\n📐 Size: {{size}}\n\nInterested? Let me know!",
            icon: MessageCircle,
            color: "green"
        },
        {
            id: 4,
            name: "Price Quote",
            type: "SMS",
            category: "Sales",
            usage: 423,
            conversion: 31.5,
            message: "Hi {{name}}, Here's your custom quote: {{amount}}. Valid until {{date}}. Reply YES to proceed!",
            icon: MessageCircle,
            color: "purple"
        },
        {
            id: 5,
            name: "Meeting Reminder",
            type: "WhatsApp",
            category: "Reminder",
            usage: 712,
            conversion: 89.3,
            message: "⏰ Reminder: We have a meeting tomorrow at {{time}}. {{location}}. See you then!",
            icon: MessageCircle,
            color: "yellow"
        },
        {
            id: 6,
            name: "Thank You Note",
            type: "Email",
            category: "Post-Sale",
            usage: 289,
            conversion: 15.8,
            message: "Dear {{name}}, Thank you for choosing us! We're thrilled to have you. Here's what happens next...",
            icon: Mail,
            color: "blue"
        }
    ];

    const categories = ["All", "Onboarding", "Follow-up", "Sales", "Reminder", "Post-Sale"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredTemplates = selectedCategory === "All"
        ? templates
        : templates.filter(t => t.category === selectedCategory);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Message Templates</h2>
                    <p className="text-sm text-gray-500">Save time with pre-written messages</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                    <Plus className="h-4 w-4" /> Create Template
                </Button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-4">
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="text-2xl font-bold">{templates.length}</div>
                        <p className="text-sm text-gray-500">Total Templates</p>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="text-2xl font-bold text-green-600">
                            {templates.reduce((sum, t) => sum + t.usage, 0).toLocaleString()}
                        </div>
                        <p className="text-sm text-gray-500">Times Used</p>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600">
                            {(templates.reduce((sum, t) => sum + t.conversion, 0) / templates.length).toFixed(1)}%
                        </div>
                        <p className="text-sm text-gray-500">Avg Conversion</p>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="text-2xl font-bold text-purple-600">
                            {templates.filter(t => t.type === "WhatsApp").length}
                        </div>
                        <p className="text-sm text-gray-500">WhatsApp Templates</p>
                    </CardContent>
                </Card>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Templates Grid */}
            <div className="grid md:grid-cols-2 gap-4">
                {filteredTemplates.map((template) => (
                    <Card key={template.id} className="bg-white">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg bg-${template.color}-50`}>
                                        <template.icon className={`h-5 w-5 text-${template.color}-600`} />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{template.name}</CardTitle>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Badge variant="outline" className="text-xs">
                                                {template.type}
                                            </Badge>
                                            <Badge variant="outline" className="text-xs">
                                                {template.category}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="sm">
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 bg-gray-50 border rounded-lg">
                                <p className="text-sm text-gray-700 whitespace-pre-wrap">{template.message}</p>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex gap-4">
                                    <span className="text-gray-500">
                                        Used: <span className="text-gray-900 font-semibold">{template.usage}</span> times
                                    </span>
                                    <span className="text-gray-500">
                                        Conversion: <span className="text-green-600 font-semibold">{template.conversion}%</span>
                                    </span>
                                </div>
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                    Use Template
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Variables Guide */}
            <Card className="bg-white">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" /> Available Variables
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded">{"{{name}}"}</code>
                            <p className="text-sm text-gray-500 mt-1">Contact's name</p>
                        </div>
                        <div>
                            <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded">{"{{phone}}"}</code>
                            <p className="text-sm text-gray-500 mt-1">Phone number</p>
                        </div>
                        <div>
                            <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded">{"{{email}}"}</code>
                            <p className="text-sm text-gray-500 mt-1">Email address</p>
                        </div>
                        <div>
                            <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded">{"{{company}}"}</code>
                            <p className="text-sm text-gray-500 mt-1">Company name</p>
                        </div>
                        <div>
                            <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded">{"{{location}}"}</code>
                            <p className="text-sm text-gray-500 mt-1">Location/Address</p>
                        </div>
                        <div>
                            <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded">{"{{date}}"}</code>
                            <p className="text-sm text-gray-500 mt-1">Today's date</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
