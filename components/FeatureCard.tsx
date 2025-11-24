import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20 hover:bg-white/10",
                className
            )}
        >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary ring-1 ring-white/10 transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" />
            </div>

            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            <p className="text-zinc-400">{description}</p>
        </div>
    );
}
