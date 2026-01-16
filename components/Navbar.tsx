import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
    return (
        <div className="w-full sticky top-0 z-50">
            <nav className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-white/5">
                <Link href="#hero" className="flex items-center group">
                    <span className="text-2xl font-semibold tracking-tight text-blue-500">Tess</span>
                    <span className="text-2xl font-semibold tracking-tight text-white">uites</span>
                </Link>

                <div className="hidden md:flex items-center gap-10 text-semibold font-medium text-white">
                    <Link href="#how-it-works" className="hover:text-white transition-colors active:translate-y-[1px]">How it works</Link>
                    <Link href="#" className="hover:text-white transition-colors active:translate-y-[1px]">Pricing</Link>
                    <Link href="#" className="hover:text-white transition-colors active:translate-y-[1px]">Our Story</Link>
                    <Link href="#" className="hover:text-white transition-colors active:translate-y-[1px]">Contact us</Link>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center gap-2 text-lg text-white font-medium">
                        <Image alt="Phone" src="/icons/phone-icon.png" className="w-4 h-4" width={24} height={24} />
                        <span>+94 77 859 968</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/login" className="px-5 py-2 text-sm font-medium text-white border border-white rounded-full hover:bg-white/5 hover:border-gray-500 hover:text-white transition-all active:translate-y-[1px]">
                            Login
                        </Link>
                        <button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20 active:translate-y-[1px]">
                            Try for free
                        </button>
                    </div>

                </div>
            </nav>

            <div className="w-full bg-gradient-to-r from-cyan-950 to-teal-950 text-white text-sm sm:text-sm py-2 text-center border-t border-white/5">
                <p className="opacity-90">
                    Learn how our Tessuites can reduce up to 30% QA time{' '}
                    <Link href="#how-it-works" className="font-semibold underline hover:text-blue-200 ml-1 active:translate-y-[1px] inline-block">
                        Read more
                    </Link>
                </p>
            </div>

        </div>
    );
}
