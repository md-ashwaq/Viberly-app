import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
    return (
        <footer className="py-12 w-full shrink-0 px-4 md:px-6 border-t border-gray-800 bg-[#111827] text-white">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link className="flex items-center gap-2 mb-4" href="/">
                            <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                                <Image src="/logo.png" alt="Viberly Logo" fill className="object-cover" />
                            </div>
                            <span className="font-bold text-xl text-white">Viberly</span>
                        </Link>
                        <p className="text-sm text-gray-500">
                            The AI-first CRM for high-growth sales teams.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/features" className="hover:text-white">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white">Mobile App</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/resources" className="hover:text-white">Blog</Link></li>
                            <li><Link href="/resources" className="hover:text-white">Help Center</Link></li>
                            <li><Link href="/resources" className="hover:text-white">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800">
                    <p className="text-sm text-gray-500">© 2025 Viberly Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
