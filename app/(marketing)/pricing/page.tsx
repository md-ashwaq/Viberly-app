"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Free Forever",
            price: { monthly: 0, annual: 0 },
            description: "Up to 3 team members",
            subtext: "Basic access with limitations on the number of leads you can engage.",
            cta: "Get Started",
            ctaLink: "/dashboard",
            features: [
                "Unlimited Lead Source integrations",
                "Unlimited Instant Lead Alerts (app only)",
                "Up to 2 Lead Distribution Recipients",
                "Up to 10 Message, File, and Page Templates",
                "Engage and track activities of your most recent lead",
                "Access across mobile app & web version",
            ],
        },
        {
            name: "Pro",
            price: { monthly: 29, annual: 24 },
            description: "Unlimited pro features for salespeople, marketers, and growing teams.",
            popular: true,
            cta: "Start Free Trial",
            ctaLink: "/dashboard",
            features: [
                "Everything in Free Forever, plus:",
                "Unlimited Follow Up Sequences",
                "Unlimited Lead Engagement & Client Management",
                "Unlimited Email Lead Alerts & Lead Distribution",
                "Unlimited Message, File, and Page Templates",
                "Unlimited View Tracking on your Sales Content",
                "Custom Branding on your Files & Pages",
                "Bulk Calling & Messaging",
                "Custom Fields, Activity Attachments & Geolocation, and much more",
            ],
        },
        {
            name: "Enterprise",
            price: { monthly: "Custom", annual: "Custom" },
            description: "Unlock the full power of Viberly for larger teams and agencies.",
            cta: "Contact Sales",
            ctaLink: "#contact",
            features: [
                "Everything in Pro, plus:",
                "Advanced Team Management & Permissions",
                "Subteam Hierarchy",
                "More Custom Fields & Options",
                "Advanced Analytics & Team Dashboard",
                "Custom Branding of the Mobile App & Web App",
                "Personalised Onboarding, Setup, and Team Training",
                "Dedicated Account Manager",
            ],
        },
    ];

    const comparisonData = [
        {
            category: "Lead Capture",
            features: [
                { name: "Lead Source Integrations", free: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
                { name: "Instant Lead Alerts via App", free: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
                { name: "Instant Lead Alerts via Email", free: "—", pro: "Unlimited", enterprise: "Unlimited" },
                { name: "Auto-Merge Duplicate Leads", free: "—", pro: "Unlimited", enterprise: "Unlimited" },
                { name: "Lead Distribution Recipients", free: "Up to 2", pro: "Unlimited", enterprise: "Unlimited" },
            ],
        },
        {
            category: "Lead Engagement",
            features: [
                { name: "Contactable Leads", free: "Most recent", pro: "Unlimited", enterprise: "Unlimited" },
                { name: "Follow Up Sequences", free: "Most recent", pro: "Unlimited", enterprise: "Unlimited" },
                { name: "Message Templates", free: "Up to 10", pro: "Unlimited", enterprise: "Unlimited" },
                { name: "File & Page Templates", free: "Up to 10", pro: "Unlimited", enterprise: "Unlimited" },
                { name: "Bulk Calling", free: "Most recent", pro: "50 at a time", enterprise: "50 at a time" },
                { name: "Bulk Messaging", free: "Most recent", pro: "50 at a time", enterprise: "50 at a time" },
            ],
        },
        {
            category: "Lead Management",
            features: [
                { name: "Timeline Activities", free: "Most recent", pro: "Unlimited", enterprise: "Unlimited" },
                { name: "Custom Client Fields", free: "—", pro: "10 fields", enterprise: "25 fields" },
                { name: "Custom Dropdown Options", free: "—", pro: "10 options", enterprise: "50 options" },
                { name: "Client & Activity CSV Export", free: "—", pro: "100 rows", enterprise: "10,000 rows" },
            ],
        },
        {
            category: "Team Features",
            features: [
                { name: "Team Members", free: "1 to 3", pro: "1 to 20", enterprise: "Unlimited" },
                { name: "User Permissions", free: "—", pro: "—", enterprise: "✓" },
                { name: "Team Dashboard", free: "—", pro: "—", enterprise: "✓" },
                { name: "Advanced Analytics", free: "—", pro: "—", enterprise: "✓" },
            ],
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Flexible plans for teams of all sizes</h1>
                <p className="text-xl text-gray-400 mb-8">Skyrocket your sales and productivity today 🚀</p>

                {/* Annual/Monthly Toggle */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <span className={`font-medium ${!isAnnual ? "text-white" : "text-gray-500"}`}>Monthly</span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${isAnnual ? "bg-blue-600" : "bg-gray-700"
                            }`}
                    >
                        <span
                            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isAnnual ? "translate-x-7" : "translate-x-1"
                                }`}
                        />
                    </button>
                    <span className={`font-medium ${isAnnual ? "text-white" : "text-gray-500"}`}>
                        Annual <span className="text-green-400">(Save 17%)</span>
                    </span>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col p-8 rounded-2xl border ${plan.popular
                                ? "bg-blue-600 border-blue-500 transform md:-translate-y-4 shadow-2xl"
                                : "bg-[#1F2937] border-gray-800"
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                POPULAR
                            </div>
                        )}
                        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold mb-2">
                            {typeof plan.price.monthly === "number" ? "$" : ""}
                            {isAnnual ? plan.price.annual : plan.price.monthly}
                            {typeof plan.price.monthly === "number" && (
                                <span className={`text-lg font-normal ${plan.popular ? "text-blue-200" : "text-gray-400"}`}>/mo</span>
                            )}
                        </div>
                        <p className={`mb-2 text-sm font-medium ${plan.popular ? "text-white" : "text-gray-300"}`}>
                            {plan.description}
                        </p>
                        {plan.subtext && <p className={`text-sm mb-6 ${plan.popular ? "text-blue-100" : "text-gray-400"}`}>{plan.subtext}</p>}

                        <Link href={plan.ctaLink} className="mb-8">
                            <Button
                                className={`w-full h-12 font-bold rounded-full ${plan.popular
                                        ? "bg-white text-blue-600 hover:bg-gray-100"
                                        : "border-gray-700 hover:bg-gray-800"
                                    }`}
                                variant={plan.popular ? "default" : "outline"}
                            >
                                {plan.cta}
                            </Button>
                        </Link>

                        <ul className="space-y-3 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-green-500"}`} />
                                    <span className={`text-sm ${plan.popular ? "text-white" : "text-gray-300"}`}>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Comparison Table */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-center mb-8">Compare Plans</h2>
                <Accordion type="single" collapsible className="w-full">
                    {comparisonData.map((section, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-gray-800">
                            <AccordionTrigger className="text-xl font-bold hover:text-blue-400">
                                {section.category}
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-800">
                                                <th className="text-left py-4 px-4 font-medium text-gray-400">Feature</th>
                                                <th className="text-center py-4 px-4 font-medium text-gray-400">Free</th>
                                                <th className="text-center py-4 px-4 font-medium text-gray-400">Pro</th>
                                                <th className="text-center py-4 px-4 font-medium text-gray-400">Enterprise</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section.features.map((feature, idx) => (
                                                <tr key={idx} className="border-b border-gray-800/50">
                                                    <td className="py-3 px-4 text-gray-300">{feature.name}</td>
                                                    <td className="py-3 px-4 text-center text-gray-400">{feature.free}</td>
                                                    <td className="py-3 px-4 text-center text-blue-400 font-medium">{feature.pro}</td>
                                                    <td className="py-3 px-4 text-center text-purple-400 font-medium">{feature.enterprise}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* Stats Section */}
            <div className="text-center mb-16">
                <h2 className="text-2xl font-bold mb-8">Trusted by 500,000+ businesses across 125 countries</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="bg-[#1F2937] p-6 rounded-xl border border-gray-800">
                        <div className="text-4xl font-bold text-blue-400 mb-2">&gt;100</div>
                        <div className="text-sm font-bold">MILLION LEADS</div>
                        <div className="text-sm text-gray-400">Engaged by Viberly users</div>
                    </div>
                    <div className="bg-[#1F2937] p-6 rounded-xl border border-gray-800">
                        <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
                        <div className="text-sm font-bold">Time saved</div>
                        <div className="text-sm text-gray-400">on sales tasks</div>
                    </div>
                    <div className="bg-[#1F2937] p-6 rounded-xl border border-gray-800">
                        <div className="text-4xl font-bold text-blue-400 mb-2">+300%</div>
                        <div className="text-sm font-bold">Increase in sales</div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div id="contact" className="max-w-2xl mx-auto bg-[#1F2937] p-8 md:p-12 rounded-2xl border border-gray-800">
                <h2 className="text-3xl font-bold mb-4 text-center">Talk to our Sales Team</h2>
                <p className="text-gray-400 mb-8 text-center">Interested in Enterprise? Let's discuss your specific needs.</p>

                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="you@company.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Your company"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Team Size</label>
                        <select className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option>1-10</option>
                            <option>11-50</option>
                            <option>51-200</option>
                            <option>201-1000</option>
                            <option>1000+</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Tell us about your needs..."
                        />
                    </div>
                    <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 font-bold rounded-full">
                        Submit Request
                    </Button>
                </form>
            </div>
        </div>
    );
}
