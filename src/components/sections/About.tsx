
import Container from "@/components/layout/Container";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[#e8eef7]">
            About Me
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-[#a9bad0]">
            <p>
              I&apos;m a software developer who enjoys building
              applications and exploring new technologies.
            </p>

            <p>
              I enjoy working across the stack, from designing
              intuitive interfaces to building backend services
              and working with databases.
            </p>

            <p>
              I&apos;m always looking to improve my skills, learn
              new concepts, and tackle interesting technical
              challenges.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
