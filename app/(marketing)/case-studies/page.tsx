import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function CaseStudiesPage() {
    const caseStudies = [
        {
            company: "PropNex Realty",
            industry: "Real Estate",
            result: "+300% Sales Increase",
            testimonial: "My team is now reaching more meetings and quota. Viberly freed my time up by about 30%.",
            author: "Paul Teo",
            role: "Associate District Director",
            stats: [
                { label: "Time Saved", value: "30%" },
                { label: "Sales Increase", value: "+300%" },
                { label: "Team Size", value: "50+" }
            ]
        },
        {
            company: "Get More Projects",
            industry: "Marketing Agency",
            result: "2-3 Hours Saved Daily",
            testimonial: "Viberly saves me 2-3 hours a day that I used to spend on manual lead management and my sales process.",
            author: "Arihant Dugar",
            role: "Founder & CEO",
            stats: [
                { label: "Time Saved Daily", value: "2-3hrs" },
                { label: "Lead Response", value: "<5min" },
                { label: "Conversion Rate", value: "+25%" }
            ]
        },
        {
            company: "CarTimes Automobile",
            industry: "Automotive",
            result: "20-30% Conversion Boost",
            testimonial: "We increase lead conversions by 20-30% with Viberly. The instant alerts make all the difference.",
            author: "Lenus Choo",
            role: "Head of Marketing",
            stats: [
                { label: "Conversion Increase", value: "20-30%" },
                { label: "Response Time", value: "Instant" },
                { label: "Leads/Month", value: "1000+" }
            ]
        },
        {
            company: "KLOUD MEDIA",
            industry: "Digital Agency",
            result: "Scalable Operations",
            testimonial: "Viberly made our business more scalable. We just send them the link to set up their accounts. Less work for us, better results for them.",
            author: "Saxon Borg",
            role: "Owner & Director",
            stats: [
                { label: "Clients Onboarded", value: "100+" },
                { label: "Setup Time", value: "<30sec" },
                { label: "Team Efficiency", value: "+40%" }
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Customer Success Stories</h1>
                <p className="text-xl text-gray-400">
                    See how businesses like yours are transforming their sales with Viberly
                </p>
            </div>

            <div className="space-y-12">
                {caseStudies.map((study, index) => (
                    <Card key={index} className="bg-[#1F2937] border-gray-800 text-white overflow-hidden">
                        <div className="grid md:grid-cols-3">
                            {/* Left: Company Info */}
                            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 flex flex-col justify-center">
                                <div className="text-sm text-blue-400 mb-2">{study.industry}</div>
                                <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                                <div className="text-3xl font-bold text-green-400 mb-6">{study.result}</div>
                                <div className="space-y-4">
                                    {study.stats.map((stat, idx) => (
                                        <div key={idx}>
                                            <div className="text-2xl font-bold">{stat.value}</div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Testimonial */}
                            <div className="md:col-span-2 p-8 flex flex-col justify-center">
                                <Quote className="h-12 w-12 text-blue-500 mb-6 opacity-50" />
                                <p className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                                    "{study.testimonial}"
                                </p>
                                <div>
                                    <div className="font-bold text-lg">{study.author}</div>
                                    <div className="text-gray-400">{study.role}, {study.company}</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center bg-[#1F2937] p-12 rounded-2xl border border-gray-800 mt-16">
                <h2 className="text-3xl font-bold mb-4">Ready to write your success story?</h2>
                <p className="text-gray-400 mb-6">Join 500,000+ teams and start closing more deals today</p>
                <a href="/dashboard">
                    <button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 font-bold rounded-full text-white">
                        Try Viberly Free
                    </button>
                </a>
            </div>
        </div>
    );
}
