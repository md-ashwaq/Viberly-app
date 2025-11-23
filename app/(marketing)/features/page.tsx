import { CheckCircle2, Zap, Smartphone, MessageCircle, BarChart3, Users } from "lucide-react";

export default function FeaturesPage() {
    const features = [
        {
            icon: Smartphone,
            title: "Mobile-First Design",
            description: "Designed for the phone, not the desktop. Manage leads on the go."
        },
        {
            icon: MessageCircle,
            title: "WhatsApp Integration",
            description: "Send messages directly via WhatsApp without saving numbers."
        },
        {
            icon: Zap,
            title: "Instant Lead Alerts",
            description: "Get notified immediately when a new lead arrives."
        },
        {
            icon: BarChart3,
            title: "Performance Analytics",
            description: "Track your sales performance and lead conversion rates."
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Assign leads to team members and track their progress."
        },
        {
            icon: CheckCircle2,
            title: "Automated Follow-ups",
            description: "Set up automated sequences to nurture leads."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Powerful Features for Modern Sales</h1>
                <p className="text-xl text-gray-400">Everything you need to close more deals, faster.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-[#1F2937] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                        <div className="bg-blue-900/20 p-4 rounded-xl w-fit mb-6">
                            <feature.icon className="h-8 w-8 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
