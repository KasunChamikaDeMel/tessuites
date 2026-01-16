import Image from 'next/image';

export function WhyDifferent() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        What makes <span className="text-blue-600">Tess</span>uites different
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

                    <div className="group flex flex-col items-start text-left">
                        <div className="mb-6 p-2 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                            <Image alt="Everyone" src="/icons/ic_everyone.png" width={48} height={48} className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Built for everyone</h3>
                        <p className="text-slate-500 leading-relaxed text-[15px]">Simple enough for non-technical users and powerful enough for developers and QA teams.</p>
                    </div>

                    <div className="group flex flex-col items-start text-left">
                        <div className="mb-6 p-2 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                            <Image alt="AI" src="/icons/ic_AI.png" width={48} height={48} className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Smart AI test generation</h3>
                        <p className="text-slate-500 leading-relaxed text-[15px]">Automatically creates intelligent test cases tailored to your website with no manual setup needed.</p>
                    </div>

                    <div className="group flex flex-col items-start text-left">
                        <div className="mb-6 p-2 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                            <Image alt="Coverage" src="/icons/ic_webCoverage.png" width={48} height={48} className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Full website coverage</h3>
                        <p className="text-slate-500 leading-relaxed text-[15px]">Tests every page and function to make sure your entire platform works flawlessly.</p>
                    </div>

                    <div className="group flex flex-col items-start text-left">
                        <div className="mb-6 p-2 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                            <Image alt="Reports" src="/icons/ic_reports.png" width={48} height={48} className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Clear, actionable reports</h3>
                        <p className="text-slate-500 leading-relaxed text-[15px]">Get easy-to-understand insights with visual test flows and detailed results.</p>
                    </div>

                    <div className="group flex flex-col items-start text-left">
                        <div className="mb-6 p-2 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                            <Image alt="Alerts" src="/icons/ic_alerts.png" width={48} height={48} className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Instant risk alerts</h3>
                        <p className="text-slate-500 leading-relaxed text-[15px]">Stay ahead with real-time notifications about potential risks or regressions before they impact your users.</p>
                    </div>

                    <div className="group flex flex-col items-start text-left">
                        <div className="mb-6 p-2 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                            <Image alt="Integration" src="/icons/ic_integration.png" width={48} height={48} className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Effortless integration</h3>
                        <p className="text-slate-500 leading-relaxed text-[15px]">Connects smoothly with your existing workflows, including GitHub, Slack, Jenkins, and other CI/CD tools.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}