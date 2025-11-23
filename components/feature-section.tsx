import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeatureSectionProps {
    title: string;
    description: string;
    imageSide?: "left" | "right";
    imageUrl?: string;
    ctaText?: string;
    ctaLink?: string;
}

export function FeatureSection({
    title,
    description,
    imageSide = "right",
    imageUrl = "/placeholder-feature.png",
    ctaText = "Try Viberly Free",
    ctaLink = "/dashboard",
}: FeatureSectionProps) {
    const content = (
        <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
            <p className="text-lg text-gray-400 leading-relaxed">{description}</p>
            {ctaText && (
                <div>
                    <Link href={ctaLink}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 h-12">
                            {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );

    const image = (
        <div className="relative h-[400px] rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-gray-800 flex items-center justify-center overflow-hidden">
            {/* Placeholder - you can replace with actual images */}
            <div className="text-6xl text-gray-700">📱</div>
        </div>
    );

    return (
        <section className="w-full py-20 bg-[#1F2937]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {imageSide === "left" ? (
                        <>
                            {image}
                            {content}
                        </>
                    ) : (
                        <>
                            {content}
                            {image}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
