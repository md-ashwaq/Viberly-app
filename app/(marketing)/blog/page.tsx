import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    const posts = [
        {
            category: "Sales Tips",
            date: "Nov 20, 2025",
            title: "How to Close More Deals on WhatsApp",
            excerpt: "Learn the proven strategies to convert more leads through WhatsApp messaging.",
            readTime: "5 min read"
        },
        {
            category: "Best Practices",
            date: "Nov 18, 2025",
            title: "The Ultimate Guide to Lead Response Time",
            excerpt: "Why speed matters and how to respond to leads within 5 minutes.",
            readTime: "8 min read"
        },
        {
            category: "Comparison",
            date: "Nov 15, 2025",
            title: "Viberly vs. Traditional CRMs",
            excerpt: "See how Viberly stacks up against desktop-first CRM solutions.",
            readTime: "6 min read"
        },
        {
            category: "Case Study",
            date: "Nov 12, 2025",
            title: "How PropNex Increased Sales by 300%",
            excerpt: "Real estate agency transforms lead management with Viberly.",
            readTime: "10 min read"
        },
        {
            category: "Product Update",
            date: "Nov 10, 2025",
            title: "Introducing AI Lead Scoring",
            excerpt: "Automatically prioritize your hottest leads with machine learning.",
            readTime: "4 min read"
        },
        {
            category: "How-To",
            date: "Nov 8, 2025",
            title: "Setting Up Your First WhatsApp Campaign",
            excerpt: "Step-by-step guide to launching bulk WhatsApp messages.",
            readTime: "7 min read"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Viberly Blog</h1>
                <p className="text-xl text-gray-400">
                    Helping B2C Salespeople & Businesses turn more Leads into Clients
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {posts.map((post, index) => (
                    <Card key={index} className="bg-[#1F2937] border-gray-800 text-white hover:border-blue-500 transition-colors cursor-pointer">
                        <div className="h-48 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-t-xl w-full flex items-center justify-center">
                            <div className="text-6xl opacity-20">📝</div>
                        </div>
                        <CardHeader>
                            <div className="flex items-center gap-2 text-sm text-blue-400 mb-2">
                                <span>{post.category}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                            </div>
                            <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-400 mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">{post.readTime}</span>
                                <Button variant="link" className="text-blue-400 p-0">
                                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-[#1F2937] p-12 rounded-2xl border border-gray-800">
                <h2 className="text-3xl font-bold mb-4">Ready to transform your sales?</h2>
                <p className="text-gray-400 mb-6">Join 500,000+ sales teams using Viberly</p>
                <Link href="/dashboard">
                    <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 font-bold rounded-full">
                        Try Viberly Free <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
