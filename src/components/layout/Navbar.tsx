
import Link from "next/link";
import Container from "./Container";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#30445e] bg-[#101d32]/90 backdrop-blur-md">
      <Container>      
        <nav
          aria-label="Main navigation"
          className="flex min-h-20 flex-col items-center justify-center gap-3 py-4 sm:flex-row sm:justify-between sm:py-0"
        >

          <Link
            href="/"
            className="shrink-0 text-lg font-semibold tracking-tight text-[#e8eef7] transition-colors hover:text-sky-400 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            Portfolio<span className="text-sky-400">.</span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#a9bad0] transition-colors hover:text-[#e8eef7] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
