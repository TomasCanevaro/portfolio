
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/70 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
