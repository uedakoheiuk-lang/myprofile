import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectData, getSlugs } from '@/lib/projects';
import remarkGfm from 'remark-gfm';
import DiagramComponent from '@/components/DiagramComponent';
import { ImpactChart } from '@/components/charts/ImpactChart';
import { IssueChart } from '@/components/charts/IssueChart';
import { AnomalyImpactChart } from '@/components/charts/AnomalyImpactChart';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

// ------------------------------------------
// 1. Static Params Generation
// ------------------------------------------
export async function generateStaticParams() {
    const slugs = getSlugs();
    return slugs.map((slug) => ({ slug }));
}

// ------------------------------------------
// 2. Page Component
// ------------------------------------------
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const projectData = await getProjectData(slug);

    if (!projectData) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <Button asChild variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
                    <Link href="/projects" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Projects
                    </Link>
                </Button>

                <header className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                        {projectData.frontmatter.title as string}
                    </h1>

                    <div className="flex flex-wrap gap-4 items-center text-sm text-zinc-400">
                        {projectData.frontmatter.date && (
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{projectData.frontmatter.date as string}</span>
                            </div>
                        )}

                        <div className="flex items-center gap-2">
                            <Tag className="h-4 w-4" />
                            <span>
                                {projectData.frontmatter.tags ? (projectData.frontmatter.tags as string[]).join(' • ') : 'No tags'}
                            </span>
                        </div>
                    </div>

                    {projectData.frontmatter.tech_stack && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {(projectData.frontmatter.tech_stack as string[]).map((tech) => (
                                <span key={tech} className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10">
                    <MDXRemote
                        source={projectData.content}
                        options={{
                            parseFrontmatter: false,
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                            }
                        }}
                        components={{ DiagramComponent, ImpactChart, IssueChart, AnomalyImpactChart }}
                    />
                </article>
            </div>
        </main>
    );
}