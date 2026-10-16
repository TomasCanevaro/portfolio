
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="flex min-h-[75vh] items-center py-24">
      <Container>
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-sky-400" />

            <p className="text-sm font-medium tracking-widest text-[#a9bad0] uppercase">
              Software Developer
            </p>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#e8eef7] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Tomas.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[#a9bad0] sm:text-xl">
            I build modern web applications, work across the
            stack, and enjoy solving challenging problems
            through clean and maintainable code.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-[#e8eef7] px-6 py-3 text-sm font-semibold text-[#101d32] transition-colors motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 hover:bg-white"
            >
              View My Projects ↗
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-[#30445e] px-6 py-3 text-sm font-semibold text-[#e8eef7] transition-colors motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 hover:border-sky-400"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 border-t border-[#30445e] pt-6">
            <a
              href="https://github.com/TomasCanevaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a9bad0] transition-colors hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/tomas-canevaro-b243b5145/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a9bad0] transition-colors hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
