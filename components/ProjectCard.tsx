import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    href: string;
    className?: string;
}

export function ProjectCard({ title, description, tags, href, className }: ProjectCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10",
                className
            )}
        >
            <div className="mb-4 flex items-start justify-between">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>

            <p className="mb-6 flex-1 text-zinc-400">{description}</p>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/10"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
