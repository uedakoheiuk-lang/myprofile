import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Brain, Rocket, Target, Users, Code, LineChart } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground relative">


      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 text-center">

        <div className="relative z-30 animate-in fade-in slide-in-from-bottom-8 duration-1000 space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Available for new projects
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Business-Oriented <br />
            <span className="text-primary">AI Engineer</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-zinc-300 leading-relaxed text-shadow-sm">
            Bridging the gap between cutting-edge AI technology and business growth.
            From concept to exit strategy, I build scalable solutions for startups.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="h-12 px-8 text-base rounded-full">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-24 px-4 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Work With Me</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              I don't just write code. I provide comprehensive technical partnership to accelerate your business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="AI Expertise"
              description="Deep knowledge in LLMs, RAG, and Agentic workflows. I build AI that actually works in production."
              icon={Brain}
            />
            <FeatureCard
              title="Requirements Definition"
              description="Translating vague business ideas into concrete technical specifications and actionable roadmaps."
              icon={Target}
            />
            <FeatureCard
              title="Exit Strategy"
              description="Technical due diligence preparation and scalable architecture design with acquisition in mind."
              icon={LineChart}
            />
            <FeatureCard
              title="Accompaniment"
              description="Long-term partnership. I act as your fractional CTO or lead engineer to guide your team."
              icon={Users}
            />
          </div>
        </div>
      </section>

      {/* Services/Projects Preview Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Works</h2>
              <p className="text-zinc-400">Recent projects and technical case studies.</p>
            </div>
            <Button asChild variant="ghost" className="group">
              <Link href="/projects" className="flex items-center">
                View All Projects
                <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder Projects - will be dynamic later or manually updated */}
            <ProjectCard
              title="AI Agent Platform"
              description="A multi-agent system for automating enterprise workflows using LangGraph."
              tags={["Next.js", "Python", "LangChain"]}
              href="/projects/ai-agent-platform"
            />
            <ProjectCard
              title="SaaS MVP Development"
              description="Rapid MVP development for a FinTech startup, leading to Series A funding."
              tags={["React", "Node.js", "AWS"]}
              href="/projects/saas-mvp"
            />
            <ProjectCard
              title="RAG Knowledge Base"
              description="Enterprise-grade RAG system processing 1M+ documents with sub-second latency."
              tags={["Vector DB", "OpenAI", "FastAPI"]}
              href="/projects/rag-kb"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to scale your vision?
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Let's discuss how we can leverage AI and robust engineering to achieve your business goals.
          </p>
          <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_60px_-10px_rgba(var(--primary),0.6)] transition-shadow">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}