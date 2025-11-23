"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface VideoModalProps {
    videoId: string;
    triggerText?: string;
    triggerVariant?: "default" | "outline" | "ghost";
}

export function VideoModal({ videoId, triggerText = "Watch Video", triggerVariant = "outline" }: VideoModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={triggerVariant} className="gap-2">
                    <Play className="h-4 w-4" />
                    {triggerText}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] p-0 bg-black border-0">
                <div className="relative pt-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=1&cc_load_policy=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
