import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
    const posts = [
        {
            title: "How to Close More Deals on WhatsApp",
            category: "Sales Tips",
            date: "Nov 20, 2025"
        },
        {
            title: "The Ultimate Guide to Lead Response Time",
            category: "Best Practices",
            date: "Nov 18, 2025"
        },
        {
            title: "Viberly vs. Traditional CRMs",
            category: "Comparison",
            date: "Nov 15, 2025"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Resources & Knowledge Hub</h1>
                <p className="text-xl text-gray-400">Learn how to grow your business with our expert guides.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {posts.map((post, index) => (
                    <Card key={index} className="bg-[#1F2937] border-gray-800 text-white">
                        <div className="h-48 bg-gray-800 rounded-t-xl w-full"></div>
                        <CardHeader>
                            <div className="text-sm text-blue-400 mb-2">{post.category} • {post.date}</div>
                            <CardTitle className="text-xl">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button variant="link" className="text-blue-400 p-0">Read More &rarr;</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
