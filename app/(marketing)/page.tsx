import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { VideoModal } from "@/components/video-modal";
import { StatsSection } from "@/components/stats-section";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { FeatureSection } from "@/components/feature-section";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="w-full py-16 md:py-24 lg:py-32 xl:py-40 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -z-10 opacity-50" />

                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center space-y-8 text-center">
                        <div className="space-y-6 max-w-4xl">
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                                The Best Lead Engagement System <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                    for Mobile-First Sales Teams
                                </span>
                            </h1>
                            <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl lg:text-2xl leading-relaxed">
                                Make your salespeople be 3x more productive and convert more leads on their phones.
                                <span className="block mt-2 text-gray-300">
                                    Gain full control and visibility over how they sell on WhatsApp, text message, call, and more
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
                            <Link href="/dashboard">
                                <Button className="h-14 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-700 font-bold w-full sm:w-auto shadow-lg shadow-blue-900/20">
                                    Try Viberly FREE <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <VideoModal videoId="XMxOf9tlA_k" triggerText="Watch Video" triggerVariant="outline" />
                        </div>
                        <p className="text-sm text-gray-500 pt-2">No credit card required. Setup in 30 seconds.</p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection />

            {/* Problem Section */}
            <section className="w-full py-20 bg-[#111827]">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        The antidote to your chronic sales problems
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="p-6 bg-[#1F2937] rounded-xl border border-gray-800">
                            <h3 className="font-bold text-xl mb-2 text-red-400">😰 Slow Response Times</h3>
                            <p className="text-gray-400">Salespeople take too long to contact new leads, missing the critical window.</p>
                        </div>
                        <div className="p-6 bg-[#1F2937] rounded-xl border border-gray-800">
                            <h3 className="font-bold text-xl mb-2 text-red-400">📉 Leads Falling Through Cracks</h3>
                            <p className="text-gray-400">No system to track follow-ups, resulting in lost opportunities.</p>
                        </div>
                        <div className="p-6 bg-[#1F2937] rounded-xl border border-gray-800">
                            <h3 className="font-bold text-xl mb-2 text-red-400">👥 No Team Visibility</h3>
                            <p className="text-gray-400">Managers have no insight into what their team is doing or how they're performing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Sections */}
            <FeatureSection
                title="Instantly contact & follow up with new leads"
                description="Automatically receive or assign leads on your phone, and engage them with automated sequences across WhatsApp, text message, phone calls, and more."
                imageSide="right"
            />

            <FeatureSection
                title="Re-engage existing leads at scale"
                description="Bulk call or message thousands of leads at a time with auto-personalisation, multi-step sequences, view tracking, and one-click WhatsApp campaigns."
                imageSide="left"
            />

            <FeatureSection
                title="Track every lead & sales activity"
                description="View and manage your leads, playbooks, and sales pipeline right from your phone. Track your team's performance with high-level dashboards and detailed activity timelines."
                imageSide="right"
            />

            <FeatureSection
                title="Gain full control and visibility over your sales team"
                description="Automatically assign leads and get real-time insights into the pipelines and progress of every team member. Unlock powerful dashboards and performance analytics to coach your team to close more deals."
                imageSide="left"
            />

            {/* Testimonials */}
            <TestimonialCarousel />

            {/* Final CTA */}
            <section className="w-full py-20 bg-gradient-to-b from-[#1F2937] to-[#111827]">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-4xl font-bold mb-6">Ready to try?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Join 500,000+ sales teams and start converting more leads today
                    </p>
                    <Link href="/dashboard">
                        <Button className="h-16 px-12 text-xl rounded-full bg-blue-600 hover:bg-blue-700 font-bold shadow-2xl shadow-blue-900/30">
                            Get Started for Free <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
