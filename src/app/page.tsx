
import Container from "@/components/layout/Container";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-[70vh] items-center py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium tracking-widest text-[#a9bad0] uppercase">
              Software Developer
            </p>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
              Hi, I&apos;m Tomas.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-[#a9bad0]">
              I build modern applications and enjoy solving problems
              through clean, efficient, and maintainable code.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-md bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-400"
              >
                Contact Me
              </a>
            </div>
          </div>
        </Container>
      </section>

      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
