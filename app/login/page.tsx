'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative min-h-screen bg-white font-sans">
            <div className="flex flex-col lg:flex-row min-h-screen">

                <div className="hidden lg:flex lg:w-1/2 bg-black flex-col justify-between p-12 relative overflow-hidden">
                    <video src="/videos/3d_Sphere.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 z-0" />

                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-24 left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10 mt-4">
                        <h1 className="text-3xl lg:text-4xl font-medium text-white mb-4 leading-tight tracking-tight max-w-m">
                            Welcome back to smarter workflows
                        </h1>
                        <p className="text-gray-400 text-base leading-relaxed max-w-m">
                            Sign in to access your tools, data and insights across the 100Thinkers suite.
                        </p>
                    </div>

                    <div className="relative z-10 mt-auto text-center">
                        <p className="text-gray-500 text-xs font-medium mb-6">Our AI-integrated products</p>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center">
                            <span className="text-lg font-medium text-[#6565EC]">Think<span className="text-[#6565EC] font-bold">CRM</span></span>
                            <span className="text-lg font-medium text-[#00A370]">Think<span className="text-[#00A370] font-bold">HR</span></span>
                            <span className="text-lg font-medium text-[#FF7A60]">Think<span className="text-[#FF7A60] font-bold">Inventory</span></span>
                            <span className="text-lg font-medium text-[#1A82E0]">Tess<span className="text-[#FFFFFF] font-bold">uites</span></span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col relative lg:bg-white min-h-screen lg:min-h-0">
                    <div className="flex justify-between items-center w-full px-6 lg:px-10 py-4">
                        <Link href="/" className="px-4 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-slate-600 flex items-center gap-2">
                            <span className="text-m">&lt;</span>
                            Back
                        </Link>

                        <div className="flex items-center gap-2">
                            <img src="/icons/phone-icon.png" alt="Phone" className="w-4 h-4" />
                            <span className="text-slate-500 text-xs font-medium">Support - </span>
                            <span className="text-slate-900 text-xs font-bold tracking-wide">+94 77 859 968</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-start max-w-80 mx-auto w-full px-6 pt-8 pb-12">
                        <h2 className="text-3xl font-semibold text-black mb-8 tracking-tight self-start">Login</h2>

                        <form className="w-full space-y-4">
                            <div className="space-y-1">
                                <input
                                    type="email" placeholder="Email"
                                    className="w-full px-4 py-3 text-black rounded-lg border border-gray-300"
                                />
                            </div>

                            <div className="space-y-1 relative">
                                <input
                                    type={showPassword ? "text" : "password"} placeholder="Password"
                                    className="w-full px-4 py-3 text-black rounded-lg border border-gray-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-12 -translate-y-6"
                                >
                                    <img alt="visibility" src="/icons/u_eye.png" className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between pb-2">
                                <label className="flex items-center gap-2.5 cursor-pointer">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" className="w-4 h-4 opacity-0 absolute cursor-pointer" />
                                        <div className="w-4 h-4 border border-slate-300 rounded">
                                            <svg className="w-full h-full text-white scale-75" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                    </div>
                                    <span className="text-xs text-slate-500 font-medium">Keep me signed in</span>
                                </label>
                                <Link href="#" className="text-xs font-semibold text-indigo-500">
                                    Forgot password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 text-white bg-[#1A82E0] text-sm font-bold rounded-full"
                            >
                                Login
                            </button>
                        </form>

                        <div className="w-full flex items-center gap-3 my-6">
                            <div className="h-px flex-1 bg-slate-200" />
                            <span className="text-xs font-bold text-slate-400 tracking-widest">OR</span>
                            <div className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="w-full space-y-3">
                            <button className="w-full py-2.5 px-4 rounded-full border border-[#7D79E6] text-[#7D79E6] text-xs font-semibold flex items-center justify-center gap-2.5">
                                <img src="/icons/google.png" alt="Google" className="w-4 h-4" />
                                Continue with Google
                            </button>
                            <button className="w-full py-2.5 px-4 rounded-full border border-[#7D79E6] text-[#7D79E6] text-xs font-semibold flex items-center justify-center gap-2.5">
                                <img src="/icons/microsoft.png" alt="Microsoft" className="w-4 h-4" />
                                Continue with Microsoft
                            </button>
                        </div>

                        <div className="mt-10 text-xs text-black font-medium">
                            Don't have an account? <Link href="#" className="font-bold text-[#7D79E6]">Register for free</Link>
                        </div>
                    </div>

                    <div className="mt-auto pt-4 text-center text-xs text-black font-semibold tracking-wider pb-8">
                        Powered by 100Thinkers © 2025
                    </div>
                </div>
            </div>
        </div>
    );
}
