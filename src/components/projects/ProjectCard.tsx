
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 transition-colors hover:border-zinc-600">
      {project.image && (
        <div className="relative aspect-video overflow-hidden border-b border-zinc-800 bg-zinc-900">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        
        <h3 className="mb-3 text-xl font-semibold text-zinc-100">
          <Link
            href={`/projects/${project.id}`}
            className="transition-colors hover:text-zinc-400"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mb-6 leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-5 border-t border-zinc-800 pt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              GitHub ↗
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
