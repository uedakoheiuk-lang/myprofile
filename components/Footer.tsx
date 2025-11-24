import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-zinc-950 py-12">
            <div className="mx-auto max-w-6xl px-4 flex flex-col items-center justify-between gap-6 sm:flex-row">
                <p className="text-sm text-zinc-500">
                    © {new Date().getFullYear()} AI Engineer Portfolio. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <Link href="https://github.com" className="text-zinc-500 hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://twitter.com" className="text-zinc-500 hover:text-white transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://linkedin.com" className="text-zinc-500 hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
