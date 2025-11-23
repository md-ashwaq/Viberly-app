import { Button } from "@/components/ui/button";
import { Users, Target, Zap, Award } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    We're on a mission to help salespeople <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        sell more, faster
                    </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Viberly was built for the modern salesperson who's always on the move.
                    We believe CRM should work from your pocket, not tie you to a desk.
                </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
                <div className="text-center p-6 bg-[#1F2937] rounded-xl border border-gray-800">
                    <div className="text-4xl font-bold text-blue-400 mb-2">500K+</div>
                    <div className="text-gray-400">Active Users</div>
                </div>
                <div className="text-center p-6 bg-[#1F2937] rounded-xl border border-gray-800">
                    <div className="text-4xl font-bold text-blue-400 mb-2">125</div>
                    <div className="text-gray-400">Countries</div>
                </div>
                <div className="text-center p-6 bg-[#1F2937] rounded-xl border border-gray-800">
                    <div className="text-4xl font-bold text-blue-400 mb-2">100M+</div>
                    <div className="text-gray-400">Leads Managed</div>
                </div>
                <div className="text-center p-6 bg-[#1F2937] rounded-xl border border-gray-800">
                    <div className="text-4xl font-bold text-blue-400 mb-2">2019</div>
                    <div className="text-gray-400">Founded</div>
                </div>
            </div>

            {/* Our Values */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#1F2937] p-8 rounded-xl border border-gray-800">
                        <div className="bg-blue-900/20 p-4 rounded-xl w-fit mb-4">
                            <Users className="h-8 w-8 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Customer-First</h3>
                        <p className="text-gray-400">
                            Every feature we build starts with understanding our customers' pain points and solving real problems.
                        </p>
                    </div>
                    <div className="bg-[#1F2937] p-8 rounded-xl border border-gray-800">
                        <div className="bg-purple-900/20 p-4 rounded-xl w-fit mb-4">
                            <Zap className="h-8 w-8 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Speed & Simplicity</h3>
                        <p className="text-gray-400">
                            We obsess over making things faster and simpler. If it takes more than 3 taps, we rethink it.
                        </p>
                    </div>
                    <div className="bg-[#1F2937] p-8 rounded-xl border border-gray-800">
                        <div className="bg-green-900/20 p-4 rounded-xl w-fit mb-4">
                            <Target className="h-8 w-8 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
                        <p className="text-gray-400">
                            We measure success by one metric: do our customers close more deals and make more money?
                        </p>
                    </div>
                    <div className="bg-[#1F2937] p-8 rounded-xl border border-gray-800">
                        <div className="bg-yellow-900/20 p-4 rounded-xl w-fit mb-4">
                            <Award className="h-8 w-8 text-yellow-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
                        <p className="text-gray-400">
                            The sales landscape changes fast. We ship new features every week to stay ahead.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-4">Built by salespeople, for salespeople</h2>
                <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Our team has decades of combined experience in B2C sales, real estate, insurance, and SaaS.
                </p>
                <div className="text-center">
                    <Link href="/dashboard">
                        <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 font-bold rounded-full">
                            Join Our Team
                        </Button>
                    </Link>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-12 rounded-2xl border border-gray-800">
                <h2 className="text-3xl font-bold mb-4">Ready to see why 500K+ teams choose Viberly?</h2>
                <p className="text-gray-400 mb-6">Start your free trial today. No credit card required.</p>
                <Link href="/dashboard">
                    <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 font-bold rounded-full">
                        Try Viberly Free
                    </Button>
                </Link>
            </div>
        </div>
    );
}
