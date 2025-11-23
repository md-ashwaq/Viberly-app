import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
    const faqs = [
        {
            question: "How does Viberly work?",
            answer: "Viberly connects to your lead sources (Facebook, website forms, etc.) and sends instant alerts to your phone. You can then contact leads via WhatsApp, SMS, or phone with one tap. All conversations and activities are tracked automatically."
        },
        {
            question: "Do I need to install anything?",
            answer: "Yes, Viberly works best with our mobile app (iOS/Android). However, you can also access everything from the web version. Download the app from the App Store or Google Play to get started."
        },
        {
            question: "How do I integrate with WhatsApp?",
            answer: "Viberly uses WhatsApp's Click-to-Chat API which doesn't require official WhatsApp Business API access. Simply tap the WhatsApp button next to any lead, and it opens a pre-filled message in your WhatsApp app."
        },
        {
            question: "Can I import my existing leads?",
            answer: "Yes! You can import leads from Excel/CSV files, your phone contacts, or directly from other CRMs. Go to Settings > Import Leads to get started."
        },
        {
            question: "How does lead distribution work?",
            answer: "You can set up rules to automatically assign incoming leads to specific team members based on criteria like lead source, location, or round-robin distribution. Leads are instantly sent to the assigned person's phone."
        },
        {
            question: "What integrations are supported?",
            answer: "Viberly integrates with Facebook Lead Ads, Instagram, TikTok, LinkedIn, Google Ads, WordPress, Zapier, and many more. Check our Integrations page for the full list."
        },
        {
            question: "Is my data secure?",
            answer: "Absolutely. We use bank-level encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We're also SOC 2 Type II certified and GDPR compliant."
        },
        {
            question: "Can I cancel anytime?",
            answer: "Yes, you can cancel your subscription at any time from the Settings page. Your data will remain accessible for 30 days after cancellation."
        },
        {
            question: "Do you offer training?",
            answer: "Yes! Free training is included with all plans. Enterprise customers get personalized onboarding and dedicated training sessions for their entire team."
        },
        {
            question: "How is Viberly different from other CRMs?",
            answer: "Viberly is built mobile-first. Other CRMs are desktop tools with mobile apps bolted on. We also focus specifically on instant lead response and WhatsApp/SMS engagement, not managing complex enterprise sales pipelines."
        }
    ];

    const guides = [
        { title: "Getting Started with Viberly", duration: "5 min" },
        { title: "Setting Up Facebook Lead Ads Integration", duration: "8 min" },
        { title: "Creating Follow-Up Sequences", duration: "10 min" },
        { title: "Using Bulk Messaging Features", duration: "7 min" },
        { title: "Team Management & Permissions", duration: "6 min" },
        { title: "Advanced Analytics & Reporting", duration: "12 min" }
    ];

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Help Center</h1>
                <p className="text-xl text-gray-400">
                    Everything you need to know about using Viberly
                </p>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-[#1F2937] p-6 rounded-xl border border-gray-800 text-center">
                    <div className="text-4xl mb-4">📚</div>
                    <h3 className="font-bold mb-2">Documentation</h3>
                    <p className="text-sm text-gray-400 mb-4">Detailed guides and tutorials</p>
                    <Button variant="outline" className="w-full">Browse Docs</Button>
                </div>
                <div className="bg-[#1F2937] p-6 rounded-xl border border-gray-800 text-center">
                    <div className="text-4xl mb-4">🎥</div>
                    <h3 className="font-bold mb-2">Video Tutorials</h3>
                    <p className="text-sm text-gray-400 mb-4">Learn with step-by-step videos</p>
                    <Button variant="outline" className="w-full">Watch Videos</Button>
                </div>
                <div className="bg-[#1F2937] p-6 rounded-xl border border-gray-800 text-center">
                    <div className="text-4xl mb-4">💬</div>
                    <h3 className="font-bold mb-2">Live Chat Support</h3>
                    <p className="text-sm text-gray-400 mb-4">Chat with our support team</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <MessageCircle className="mr-2 h-4 w-4" /> Start Chat
                    </Button>
                </div>
            </div>

            {/* Popular Guides */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Popular Guides</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {guides.map((guide, index) => (
                        <div key={index} className="bg-[#1F2937] p-4 rounded-lg border border-gray-800 flex items-center justify-between hover:border-blue-500 transition-colors cursor-pointer">
                            <div>
                                <h4 className="font-medium">{guide.title}</h4>
                                <p className="text-sm text-gray-400">{guide.duration}</p>
                            </div>
                            <span className="text-blue-400">→</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQs */}
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`} className="border-gray-800">
                            <AccordionTrigger className="text-left hover:text-blue-400">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* Contact Support */}
            <div className="text-center bg-[#1F2937] p-12 rounded-2xl border border-gray-800 mt-16">
                <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
                <p className="text-gray-400 mb-6">Our support team is here 24/7 to assist you</p>
                <div className="flex gap-4 justify-center">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                        <MessageCircle className="mr-2 h-4 w-4" /> Chat with Support
                    </Button>
                    <Link href="mailto:support@viberly.com">
                        <Button variant="outline">Email Us</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
