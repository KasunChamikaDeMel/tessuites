import Link from 'next/link';
import Image from 'next/image';

export function Footer() {

    return (
        <footer className="bg-[#030D16] text-white py-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center group">
                            <span className="text-2xl font-semibold tracking-tight text-blue-500">Tess</span>
                            <span className="text-2xl font-semibold tracking-tight text-white">uites</span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Test smarter, deliver faster
                        </p>
                        <div className="flex gap-4 mt-2">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                                <Image alt="Facebook" src="/icons/fb.png" width={40} height={40} className="w-full h-full object-cover opacity-70" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                                <Image alt="Instagram" src="/icons/ig.png" width={40} height={40} className="w-full h-full object-cover opacity-70" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                                <Image alt="LinkedIn" src="/icons/li.png" width={40} height={40} className="w-full h-full object-cover opacity-70" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Products</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">ThinkCRM</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">ThinkInventory</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">ThinkHR</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Our story</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Get in touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Image src="/icons/phone-icon.png" alt="Phone" width={20} height={20} className="w-4 h-4 opacity-50" />
                                <span>+94 77 859 968</span>
                            </li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Send us a message</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>©Tessuites 2025. All rights reserved</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Terms & Conditions</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}