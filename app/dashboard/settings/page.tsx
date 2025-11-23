"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, User, Shield, Smartphone, Mail, LogOut } from "lucide-react";

export default function SettingsPage() {
    const [notifications, setNotifications] = useState({
        whatsapp: true,
        email: false,
        marketing: false,
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="space-y-6 pb-20 md:pb-0 max-w-4xl"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-sm text-gray-500">Manage your account preferences and integrations.</p>
            </div>

            {/* Profile Section */}
            <motion.div variants={item}>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5 text-blue-600" /> Profile
                        </CardTitle>
                        <CardDescription>Manage your public profile and account details.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center gap-6">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>DU</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h3 className="font-medium text-lg">Demo User</h3>
                            <p className="text-sm text-gray-500">demo@viberly.app</p>
                            <Button variant="outline" size="sm" className="mt-2">Change Avatar</Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Notifications Section */}
            <motion.div variants={item}>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-yellow-600" /> Notifications
                        </CardTitle>
                        <CardDescription>Configure how you want to be alerted.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 rounded-full">
                                    <Smartphone className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-medium">WhatsApp Alerts</p>
                                    <p className="text-sm text-gray-500">Get notified instantly on WhatsApp.</p>
                                </div>
                            </div>
                            <Switch
                                checked={notifications.whatsapp}
                                onCheckedChange={(c) => setNotifications({ ...notifications, whatsapp: c })}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-full">
                                    <Mail className="h-4 w-4 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-medium">Email Digest</p>
                                    <p className="text-sm text-gray-500">Daily summary of new leads.</p>
                                </div>
                            </div>
                            <Switch
                                checked={notifications.email}
                                onCheckedChange={(c) => setNotifications({ ...notifications, email: c })}
                            />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Security Section */}
            <motion.div variants={item}>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-red-600" /> Security
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Two-Factor Authentication</p>
                                <p className="text-sm text-gray-500">Add an extra layer of security to your account.</p>
                            </div>
                            <Button variant="outline">Enable</Button>
                        </div>
                        <div className="pt-4 border-t">
                            <Button variant="destructive" className="w-full sm:w-auto">
                                <LogOut className="mr-2 h-4 w-4" /> Sign out of all devices
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
}
