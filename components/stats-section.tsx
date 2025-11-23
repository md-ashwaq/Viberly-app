export function StatsSection() {
    const stats = [
        { value: ">100", label: "MILLION", sublabel: "LEADS", description: "Engaged by Viberly users" },
        { value: "80%", label: "Time saved", description: "on sales tasks" },
        { value: "+300%", label: "Increase", sublabel: "in sales" },
    ];

    return (
        <section className="w-full py-16 bg-[#0F172A]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Trusted by 500,000+ businesses across 125 countries
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-[#1E293B] rounded-xl border border-gray-800">
                            <div className="text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                            <div className="text-xl font-bold text-white mb-1">
                                {stat.label}
                                {stat.sublabel && <span className="block text-sm">{stat.sublabel}</span>}
                            </div>
                            <div className="text-gray-400 text-sm">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
