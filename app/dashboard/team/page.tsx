"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Mail, Phone, UserPlus, BarChart } from "lucide-react";

export default function TeamPage() {
    const team = [
        {
            name: "Sarah Chen",
            role: "Sales Manager",
            email: "sarah.chen@viberly.com",
            phone: "+1 (555) 123-4567",
            status: "Online",
            leads: 89,
            converted: 42,
            revenue: 67800,
            responseTime: "1.8min",
            avatar: "SC",
            color: "from-blue-500 to-cyan-500"
        },
        {
            name: "Mike Johnson",
            role: "Senior Sales Rep",
            email: "mike.j@viberly.com",
            phone: "+1 (555) 234-5678",
            status: "Online",
            leads: 76,
            converted: 35,
            revenue: 56000,
            responseTime: "2.1min",
            avatar: "MJ",
            color: "from-purple-500 to-pink-500"
        },
        {
            name: "Priya Sharma",
            role: "Sales Representative",
            email: "priya.s@viberly.com",
            phone: "+91 98765 43210",
            status: "Away",
            leads: 95,
            converted: 38,
            revenue: 60800,
            responseTime: "3.4min",
            avatar: "PS",
            color: "from-green-500 to-emerald-500"
        },
        {
            name: "Carlos Rodriguez",
            role: "Sales Representative",
            email: "carlos.r@viberly.com",
            phone: "+34 612 34 56 78",
            status: "Online",
            leads: 68,
            converted: 31,
            revenue: 49600,
            responseTime: "2.8min",
            avatar: "CR",
            color: "from-orange-500 to-red-500"
        },
        {
            name: "Emma Wilson",
            role: "Junior Sales Rep",
            email: "emma.w@viberly.com",
            phone: "+44 7700 900123",
            status: "Offline",
            leads: 82,
            converted: 34,
            revenue: 54400,
            responseTime: "4.2min",
            avatar: "EW",
            color: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Team Management</h2>
                    <p className="text-sm text-gray-500">Monitor and manage your sales team performance</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                    <UserPlus className="h-4 w-4" /> Add Team Member
                </Button>
            </div>

            {/* Team Stats */}
            <div className="grid md:grid-cols-5 gap-4">
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-gray-500">Team Size</span>
                        </div>
                        <div className="text-2xl font-bold">{team.length}</div>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <BarChart className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-500">Total Leads</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                            {team.reduce((sum, member) => sum + member.leads, 0)}
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-gray-500">Converted</span>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">
                            {team.reduce((sum, member) => sum + member.converted, 0)}
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-gray-500">Total Revenue</span>
                        </div>
                        <div className="text-2xl font-bold text-yellow-600">
                            ${(team.reduce((sum, member) => sum + member.revenue, 0) / 1000).toFixed(0)}K
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-gray-500">Avg Response</span>
                        </div>
                        <div className="text-2xl font-bold">2.7min</div>
                    </CardContent>
                </Card>
            </div>

            {/* Team Members */}
            <div className="grid lg:grid-cols-2 gap-4">
                {team.map((member, index) => (
                    <Card key={index} className="bg-white">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-16 w-16">
                                        <AvatarFallback className={`bg-gradient-to-br ${member.color} text-white font-bold text-xl`}>
                                            {member.avatar}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <CardTitle className="text-lg">{member.name}</CardTitle>
                                        <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                                        <Badge
                                            className={`mt-2 ${member.status === "Online" ? "bg-green-50 text-green-700" :
                                                    member.status === "Away" ? "bg-yellow-50 text-yellow-700" :
                                                        "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {member.status}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <Mail className="h-4 w-4 text-gray-400" />
                                    <span className="text-gray-600">{member.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Phone className="h-4 w-4 text-gray-400" />
                                    <span className="text-gray-600">{member.phone}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-3 pt-4 border-t">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">{member.leads}</div>
                                    <p className="text-xs text-gray-500">Leads</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">{member.converted}</div>
                                    <p className="text-xs text-gray-500">Converted</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-600">
                                        {((member.converted / member.leads) * 100).toFixed(0)}%
                                    </div>
                                    <p className="text-xs text-gray-500">Rate</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-600">
                                        ${(member.revenue / 1000).toFixed(0)}K
                                    </div>
                                    <p className="text-xs text-gray-500">Revenue</p>
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <Button variant="outline" size="sm" className="flex-1">View Stats</Button>
                                <Button variant="outline" size="sm" className="flex-1">Assign Leads</Button>
                                <Button variant="outline" size="sm">Settings</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Performance Leaderboard */}
            <Card className="bg-white">
                <CardHeader>
                    <CardTitle>🏆 This Month's Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {team
                            .sort((a, b) => b.converted - a.converted)
                            .map((member, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <div className={`text-2xl ${index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-400" : index === 2 ? "text-orange-600" : "text-gray-400"}`}>
                                            {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
                                        </div>
                                        <Avatar className="h-10 w-10">
                                            <AvatarFallback className={`bg-gradient-to-br ${member.color} text-white font-bold`}>
                                                {member.avatar}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-semibold">{member.name}</div>
                                            <div className="text-sm text-gray-500">{member.role}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <div className="text-sm text-gray-500">Conversions</div>
                                            <div className="text-xl font-bold text-green-600">{member.converted}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-500">Revenue</div>
                                            <div className="text-xl font-bold text-yellow-600">${(member.revenue / 1000).toFixed(0)}K</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
