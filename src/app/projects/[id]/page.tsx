
import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

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
          <div className="aspect-video rounded-xl bg-[#192b44]" />
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
          className="mb-10 inline-block text-sm text-[#a9bad0] transition-colors hover:text-[#e8eef7]"
        >
          ← Back to Projects
        </Link>

        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#e8eef7] sm:text-5xl">
            {project.title}
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-[#a9bad0]">
            {project.longDescription ?? project.description}
          </p>

          <div className="mb-10 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-[#30445e] bg-[#192b44] px-3 py-1.5 text-sm text-[#a9bad0]"
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
          <div className="relative aspect-video overflow-hidden rounded-xl border border-[#30445e] bg-[#192b44]">
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
