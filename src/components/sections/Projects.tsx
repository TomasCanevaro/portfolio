
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-100">
          Projects
        </h2>

        <p className="mb-10 max-w-2xl text-zinc-400">
          A selection of projects I&apos;ve worked on,
          showcasing different technologies and approaches
          to software development.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
