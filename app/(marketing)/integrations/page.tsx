import { Facebook, Instagram, Linkedin, MessageSquare, Mail } from "lucide-react";

export default function IntegrationsPage() {
    const integrations = [
        { name: "Facebook Lead Ads", icon: Facebook, color: "text-blue-500" },
        { name: "Instagram Ads", icon: Instagram, color: "text-pink-500" },
        { name: "LinkedIn Lead Gen", icon: Linkedin, color: "text-blue-700" },
        { name: "WhatsApp Business", icon: MessageSquare, color: "text-green-500" },
        { name: "Gmail / Outlook", icon: Mail, color: "text-red-500" },
        { name: "TikTok Leads", icon: MessageSquare, color: "text-black dark:text-white" }, // Placeholder icon
    ];

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Connect with Your Favorite Tools</h1>
                <p className="text-xl text-gray-400">Seamlessly integrate with the platforms you use every day.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {integrations.map((item, index) => (
                    <div key={index} className="bg-[#1F2937] p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:bg-gray-800 transition-colors cursor-pointer">
                        <div className="p-3 bg-gray-900 rounded-lg">
                            <item.icon className={`h-8 w-8 ${item.color}`} />
                        </div>
                        <span className="font-bold text-lg">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
