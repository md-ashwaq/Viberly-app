"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
    {
        quote: "Viberly saves me 2-3 hours a day that I used to spend on manual lead management and my sales process.",
        author: "Arihant Dugar",
        role: "Founder & CEO, Get More Projects",
    },
    {
        quote: "My team is now reaching more meetings and quota. Viberly freed my time up by about 30%.",
        author: "Paul Teo",
        role: "Associate District Director, PropNex Realty",
    },
    {
        quote: "Viberly made our business more scalable. We just send them the link to set up their accounts and training videos.",
        author: "Saxon Borg",
        role: "Owner & Director, KLOUD MEDIA",
    },
    {
        quote: "Instead of spending 20-30 minutes on a lead, we only spend 2-3 minutes after switching to Viberly.",
        author: "Gaël Ovide-Etienne",
        role: "Owner, Ocean Worldwide",
    },
    {
        quote: "We increase lead conversions by 20-30% with Viberly.",
        author: "Lenus Choo",
        role: "Head of Marketing, CarTimes Automobile",
    },
    {
        quote: "Viberly helps you stop leaving money on the table. None of my leads will fall through the cracks again.",
        author: "Nadia Ederer",
        role: "Realtor, PropNex Realty",
    },
];

export function TestimonialCarousel() {
    return (
        <section className="w-full py-20 bg-[#111827]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Loved by 500,000+ sales teams
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Join them, and boost sales and productivity by up to 300%
                </p>

                <Carousel className="w-full max-w-5xl mx-auto">
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="bg-[#1F2937] border-gray-800 text-white h-full">
                                        <CardContent className="flex flex-col justify-between p-6 h-full">
                                            <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                                            <div>
                                                <p className="font-bold text-white">{testimonial.author}</p>
                                                <p className="text-sm text-gray-400">{testimonial.role}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
                    <CarouselNext className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
                </Carousel>
            </div>
        </section>
    );
}
