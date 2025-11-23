"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Task {
    id: string;
    title: string;
    dueDate: string;
    priority: "High" | "Medium" | "Low";
    completed: boolean;
}

const MOCK_TASKS: Task[] = [
    {
        id: "1",
        title: "Follow up with Rahul about pricing",
        dueDate: "Today, 2:00 PM",
        priority: "High",
        completed: false,
    },
    {
        id: "2",
        title: "Send proposal to Priya",
        dueDate: "Tomorrow, 10:00 AM",
        priority: "Medium",
        completed: false,
    },
    {
        id: "3",
        title: "Call Amit for feedback",
        dueDate: "Fri, 4:00 PM",
        priority: "Low",
        completed: false,
    },
    {
        id: "4",
        title: "Schedule demo with Sneha",
        dueDate: "Mon, 11:00 AM",
        priority: "High",
        completed: false,
    },
];

export default function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

    const toggleTask = (id: string) => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    };

    const getPriorityColor = (p: string) => {
        switch (p) {
            case "High": return "text-red-600 bg-red-50 border-red-200";
            case "Medium": return "text-yellow-600 bg-yellow-50 border-yellow-200";
            case "Low": return "text-blue-600 bg-blue-50 border-blue-200";
            default: return "text-gray-600";
        }
    };

    return (
        <div className="space-y-6 pb-20 md:pb-0">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">My Tasks</h2>
                    <p className="text-sm text-gray-500">You have {tasks.filter(t => !t.completed).length} pending tasks.</p>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" /> Add Task
                </Button>
            </div>

            <div className="space-y-3">
                <AnimatePresence>
                    {tasks.map((task, index) => (
                        <motion.div
                            key={task.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            layout
                        >
                            <Card className={`transition-colors ${task.completed ? "bg-gray-50 opacity-60" : "bg-white"}`}>
                                <CardContent className="p-4 flex items-center gap-4">
                                    <Checkbox
                                        checked={task.completed}
                                        onCheckedChange={() => toggleTask(task.id)}
                                        className="h-5 w-5 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                                    />
                                    <div className="flex-1">
                                        <motion.p
                                            className={`font-medium ${task.completed ? "text-gray-500 line-through" : "text-gray-900"}`}
                                            layout
                                        >
                                            {task.title}
                                        </motion.p>
                                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {task.dueDate}
                                            </div>
                                            <Badge variant="outline" className={`text-[10px] px-2 py-0 h-5 ${getPriorityColor(task.priority)}`}>
                                                {task.priority}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
