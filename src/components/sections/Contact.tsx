
import Container from "@/components/layout/Container";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#e8eef7]">
            Get In Touch
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-[#a9bad0]">
            I&apos;m always open to discussing new opportunities,
            interesting projects, or collaborating with other
            developers. Feel free to reach out!
          </p>

          
          <a
           href="mailto:your.email@example.com"
           className="inline-block text-lg font-medium text-zinc-200 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-white hover:decoration-zinc-300"
           >
           tomasjaviercanevaro@gmail.com
          </a>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="https://github.com/TomasCanevaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a9bad0] transition-colors hover:text-[#e8eef7]"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/tomas-canevaro-b243b5145/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a9bad0] transition-colors hover:text-[#e8eef7]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
