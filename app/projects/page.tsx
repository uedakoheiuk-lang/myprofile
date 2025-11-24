import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowLeft } from "lucide-react";
import { getAllProjectsMeta } from "@/lib/projects";

export default function ProjectsPage() {
    const projects = getAllProjectsMeta();

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-4">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="space-y-4">
                    <Button asChild variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary">
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">All Projects</h1>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        A collection of my technical work, ranging from AI agents to full-stack SaaS applications.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project: any) => (
                        <ProjectCard
                            key={project.slug}
                            title={project.title}
                            description={project.description || "No description available."}
                            tags={project.tags || []}
                            href={`/projects/${project.slug}`}
                        />
                    ))}

                    {/* Fallback if no projects found (optional, but good for demo if folder is empty) */}
                    {projects.length === 0 && (
                        <div className="col-span-full text-center text-zinc-500 py-12">
                            No projects found. Add .mdx files to content/projects to see them here.
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
