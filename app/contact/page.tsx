"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/app/actions/send-email";
import { Loader2, Send, ArrowLeft } from "lucide-react";

export default function ContactPage() {
    const [pending, setPending] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    async function handleSubmit(formData: FormData) {
        setPending(true);
        setMessage(null);

        const result = await sendEmail(formData);

        if (result.error) {
            setMessage({ type: "error", text: result.error });
        } else {
            setMessage({ type: "success", text: "Message sent successfully! I'll get back to you soon." });
            // Optional: Reset form here if needed, but native form reset is tricky with server actions without useRef
            // For simplicity, we'll just show the success message.
            const form = document.querySelector("form") as HTMLFormElement;
            if (form) form.reset();
        }

        setPending(false);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-4 py-24 bg-background text-foreground relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="absolute top-6 left-4 sm:top-8 sm:left-8 z-10">
                <Button asChild variant="ghost" className="text-zinc-400 hover:text-white hover:bg-white/10">
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>

            <div className="w-full max-w-2xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                        Get in Touch
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-lg mx-auto">
                        Have a project in mind or want to discuss AI solutions? Send me a message and let's start the conversation.
                    </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
                    <form action={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm placeholder:text-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm placeholder:text-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm placeholder:text-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm placeholder:text-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        {message && (
                            <div
                                className={`p-4 rounded-md text-sm ${message.type === "success"
                                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                                    }`}
                            >
                                {message.text}
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={pending}
                            className="w-full h-12 text-base font-medium rounded-md bg-primary hover:bg-primary/90 transition-colors"
                        >
                            {pending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    );
}
