'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const [name, setName] = useState('');                   // Name input state
    const [email, setEmail] = useState('');                 // Email
    const [password, setPassword] = useState('');           // Password
    const [showPassword, setShowPassword] = useState(false); // password visibility
    const [loading, setLoading] = useState(false);           // Form submission
    const [error, setError] = useState('');                 // Error message
    const router = useRouter();                              // redirection


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {                                               // Send registration data to the local API
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });


            if (res.ok) {
                router.push('/login');
            } else {
                const data = await res.json();
                setError(data.error || 'Registration failed');
            }
        } catch (err) {
            setError('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

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
                            Join smarter workflows
                        </h1>
                        <p className="text-gray-400 text-base leading-relaxed max-w-m">
                            Create an account to access ecosystem.
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
                        <h2 className="text-3xl font-semibold text-black mb-8 tracking-tight self-start">Create Account</h2>

                        <form className="w-full space-y-4" onSubmit={handleSubmit}>
                            {error && (
                                <div className="p-3 text-xs text-red-500 bg-red-50 rounded-lg">
                                    {error}
                                </div>
                            )}
                            <div className="space-y-1">
                                <input
                                    type="text" placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 text-black rounded-lg border border-gray-300"
                                />
                            </div>
                            <div className="space-y-1">
                                <input
                                    type="email" placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 text-black rounded-lg border border-gray-300"
                                />
                            </div>

                            <div className="space-y-1 relative">
                                <input
                                    type={showPassword ? "text" : "password"} placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 text-black rounded-lg border border-gray-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2"
                                >
                                    <img alt="visibility" src="/icons/u_eye.png" className="w-4 h-4" />
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 text-white bg-[#1A82E0] text-sm font-bold rounded-full disabled:opacity-50"
                            >
                                {loading ? 'Creating account...' : 'Sign Up'}
                            </button>
                        </form>

                        <div className="mt-10 text-xs text-black font-medium flex items-center justify-center gap-2">
                            Already have an account? <Link href="/login" className="font-medium text-[#7D79E6]">Login</Link>
                        </div>
                    </div>

                    <div className="mt-auto pt-4 text-center text-xs text-gray-500 font-medium tracking-wider pb-8">
                        Powered by 100Thinkers © 2025
                    </div>
                </div>
            </div>
        </div>
    );
}
