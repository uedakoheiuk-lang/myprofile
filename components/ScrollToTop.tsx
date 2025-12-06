"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all hover:bg-zinc-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Scroll to top"
        >
            <ArrowUp className="h-6 w-6" />
        </button>
    );
}
