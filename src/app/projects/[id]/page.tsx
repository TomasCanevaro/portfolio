
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({
  params,
}: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectLoading />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

function ProjectLoading() {
  return (
    <main className="py-20">
      <Container>
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-32 rounded bg-zinc-800" />
          <div className="h-12 w-2/3 rounded bg-zinc-800" />
          <div className="h-24 max-w-2xl rounded bg-zinc-800" />
          <div className="aspect-video rounded-xl bg-zinc-900" />
        </div>
      </Container>
    </main>
  );
}

async function ProjectContent({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find(
    (project) => project.id === id
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="py-20">
      <Container>
        <Link
          href="/#projects"
          className="mb-10 inline-block text-sm text-zinc-400 transition-colors hover:text-zinc-100"
        >
          ← Back to Projects
        </Link>

        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            {project.title}
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-zinc-400">
            {project.longDescription ?? project.description}
          </p>

          <div className="mb-10 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mb-12 flex flex-wrap gap-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-200 transition-colors hover:text-white"
              >
                View Source Code ↗
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-200 transition-colors hover:text-white"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>

        {project.image && (
          <div className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        )}
      </Container>
    </main>
  );
}
