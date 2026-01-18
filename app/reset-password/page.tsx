'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function ResetPasswordForm() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const router = useRouter();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!token) {
            setMessage({ type: 'error', text: 'Missing reset token.' });
            return;
        }

        if (password !== confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match.' });
            return;
        }

        setLoading(true);
        setMessage(null);

        try {
            const res = await fetch('/api/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, password }),
            });

            if (res.ok) {
                setMessage({ type: 'success', text: 'Password reset successfully!' });
                setTimeout(() => router.push('/login'), 2000);
            } else {
                const data = await res.json();
                setMessage({ type: 'error', text: data.error || 'Reset failed.' });
            }
        } catch (err) {
            setMessage({ type: 'error', text: 'An error occurred.' });
        } finally {
            setLoading(false);
        }
    };

    if (!token) {
        return <div className="text-red-500 text-center">Invalid or missing reset token.</div>;
    }

    return (
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
            {message && (
                <div className={`p-3 text-xs rounded-lg ${message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
                    {message.text}
                </div>
            )}

            <div className="space-y-1">
                <input
                    type="password" placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 text-black rounded-lg border border-gray-300"
                />
            </div>

            <div className="space-y-1">
                <input
                    type="password" placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 text-black rounded-lg border border-gray-300"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-white bg-[#1A82E0] text-sm font-bold rounded-full disabled:opacity-50"
            >
                {loading ? 'Resetting...' : 'Reset Password'}
            </button>
        </form>
    );
}

export default function ResetPasswordPage() {
    return (
        <div className="relative min-h-screen bg-white font-sans">
            <div className="flex flex-col lg:flex-row min-h-screen">
                <div className="hidden lg:flex lg:w-1/2 bg-black flex-col justify-between p-12 relative overflow-hidden">
                    <video src="/videos/3d_Sphere.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 z-0" />
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-24 left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col relative lg:bg-white min-h-screen lg:min-h-0">
                    <div className="flex justify-between items-center w-full px-6 lg:px-10 py-4">
                        <Link href="/login" className="px-4 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-slate-600 flex items-center gap-2">
                            <span className="text-m">&lt;</span>
                            Back to Login
                        </Link>
                    </div>

                    <div className="flex-1 flex flex-col justify-center max-w-80 mx-auto w-full px-6 pt-8 pb-12">
                        <h2 className="text-3xl font-semibold text-black mb-4 tracking-tight">Set New Password</h2>
                        <p className="text-gray-500 text-sm mb-8">Please enter your new password below.</p>

                        <Suspense fallback={<div>Loading...</div>}>
                            <ResetPasswordForm />
                        </Suspense>
                    </div>

                    <div className="mt-auto pt-4 text-center text-xs text-gray-500 font-medium tracking-wider pb-8">
                        Powered by 100Thinkers © 2025
                    </div>
                </div>
            </div>
        </div>
    );
}
