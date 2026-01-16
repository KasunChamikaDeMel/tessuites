'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Hero() {
    const [mode, setMode] = useState<'simple' | 'advanced'>('simple');
    return (
        <section className="relative w-full pt-20 pb-20 bg-white flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[20%] left-[20%] right-[20%] w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
            </div>

            <div className="relative z-10 px-4 mx-auto text-center max-w-5xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-6">
                    <span className="text-blue-500">Smarter Testing,</span> Built for Everyone
                </h1>

                <p className="max-w-5xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
                    Enter your URL below, Tessuites is your AI-powered QA agent,
                    handles the rest: generating, running, and managing tests
                    so your team can focus on building, not debugging. No tech skills needed.
                </p>

                <div className="inline-flex items-center p-1 mb-10 bg-gray-100 rounded-full border border-gray-200">
                    <button onClick={() => setMode('simple')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${mode === 'simple'
                            ? 'bg-blue-100 text-blue-700 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}>
                        Simple
                    </button>
                    <button onClick={() => setMode('advanced')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${mode === 'advanced'
                            ? 'bg-blue-100 text-blue-700 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}>
                        Advanced
                    </button>
                </div>

                <div className="relative max-w-2xl mx-auto mb-20">
                    <div className="flex items-center bg-white border border-blue-400 rounded-full p-1.5 shadow-sm transition-all focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                        <input type="text" placeholder="Enter your website URL" className="flex-1 bg-transparent px-6 py-2 text-gray-700 placeholder:text-gray-400 outline-none" />
                        <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full whitespace-nowrap">
                            Start Testing
                        </button>
                    </div>
                </div>

                <div className="relative mx-auto mt-10 max-w-5xl">
                    <div className="relative w-full overflow-hidden rounded-xl bg-white border flex items-center justify-center group">
                        <Image alt="Dashboard" src="/images/hero-1.png" width={1200} height={750} className="w-full h-auto" />

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black-5">
                            <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center cursor-pointer">
                                <Image alt="Play" src="/icons/play.png" width={36} height={36} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
