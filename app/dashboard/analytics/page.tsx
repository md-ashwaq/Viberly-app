"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, MessageCircle, Target } from "lucide-react";

export default function AnalyticsPage() {
    const teamData = [
        { name: "Sarah Chen", leads: 89, converted: 42, rate: 47 },
        { name: "Mike Johnson", leads: 76, converted: 35, rate: 46 },
        { name: "Priya Sharma", leads: 95, converted: 38, rate: 40 },
        { name: "Carlos Rodriguez", leads: 68, converted: 31, rate: 46 },
        { name: "Emma Wilson", leads: 82, converted: 34, rate: 41 }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h2>
                <p className="text-sm text-gray-500">Track your sales performance and team metrics</p>
            </div>

            {/* KPI Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Total Leads</CardTitle>
                        <Users className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,070</div>
                        <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                            <TrendingUp className="h-3 w-3" /> +16.7% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
                        <Target className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">48.2%</div>
                        <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                            <TrendingUp className="h-3 w-3" /> +4.3% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Revenue</CardTitle>
                        <TrendingUp className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$187.6K</div>
                        <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                            <TrendingUp className="h-3 w-3" /> +22.1% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Avg Response Time</CardTitle>
                        <MessageCircle className="h-4 w-4 text-orange-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2.4min</div>
                        <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                            <TrendingDown className="h-3 w-3" /> Improved by 38%
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Team Stats Table */}
            <Card className="bg-white">
                <CardHeader>
                    <CardTitle>Top Performers</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Team Member</th>
                                    <th className="text-center py-3 px-4 font-medium text-gray-600">Total Leads</th>
                                    <th className="text-center py-3 px-4 font-medium text-gray-600">Converted</th>
                                    <th className="text-center py-3 px-4 font-medium text-gray-600">Conversion Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamData.map((member, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-50">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm">
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <span className="font-medium">{member.name}</span>
                                            </div>
                                        </td>
                                        <td className="text-center py-3 px-4">{member.leads}</td>
                                        <td className="text-center py-3 px-4 text-green-600 font-semibold">{member.converted}</td>
                                        <td className="text-center py-3 px-4">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                                                {member.rate}%
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
