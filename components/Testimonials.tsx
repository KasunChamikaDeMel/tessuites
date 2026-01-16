

export function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-slate-900 tracking-tight">
                    Testimonials
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

                    <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
                        <div>
                            <p className="text-black text-sm leading-relaxed mb-8">
                                "We replaced three different tools with Tessuite. Everything from sales to HR now
                                talks to each other — it's saved us time, money, and so many headaches."
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-700 text-sm">Amara Perera</h4>
                            <p className="text-gray-400 text-xs mt-1">Co-founder at SwiftMart</p>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
                        <div>
                            <p className="text-black text-sm leading-relaxed mb-8">
                                "The AI suggestions are genuinely useful. Our stock forecasting is more accurate,
                                and our customer engagement has improved since switching to their CRM."
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-700 text-sm">Sahan Mendis</h4>
                            <p className="text-gray-400 text-xs mt-1">Operations Lead at GreenLeaf Organics</p>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
                        <div>
                            <p className="text-black text-sm leading-relaxed mb-8">
                                "We used to manage leave and attendance manually. Now it's all streamlined,
                                and our employees actually enjoy using the HR dashboard!"
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-700 text-sm">Dilani Gunasekara</h4>
                            <p className="text-gray-400 text-xs mt-1">HR Manager at Optix Digital</p>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between">
                        <div>
                            <p className="text-black text-sm leading-relaxed mb-8">
                                "Tessuite feels like software made for real business people — intuitive, reliable,
                                and actually helpful. We scaled with confidence."
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-700 text-sm">Thilina Samarasinghe</h4>
                            <p className="text-gray-400 text-xs mt-1">CEO at NeoTronics</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
