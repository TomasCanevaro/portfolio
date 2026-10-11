
import Container from "@/components/layout/Container";

const technologies = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Flask", "REST APIs"],
  },
  {
    category: "Databases & Tools",
    items: ["PostgreSQL", "MongoDB", "Git", "GitHub"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-zinc-100">
          Tech Stack
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {technologies.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <h3 className="mb-5 text-lg font-medium text-zinc-200">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
